import { version } from '../../package.json';
import { Router } from 'express';

export default ( {config,db} ) => {
	let api = Router();

	api.get( '/', ( req, res ) => {
		console.log("yep");
		res.json( {
			message: "GET with the program.."
		} );
	} );

	api.post( '/', ( req, res ) => {

		// Examine the body
		let body = req.body;

		if ( body === undefined ) {
			res.statusCode = 400;
			res.json( {
				"error": "Could not decode request: no body provided"
			} );
		} else {
			// Examine the payload
			let payload = body.payload;

			if ( payload === undefined ) {
				res.statusCode = 400;
				res.json( {
					"error": "Could not decode request: no payload provided"
				} );

			} else {

				// Check the payload is an array
				if ( !Array.isArray( payload ) ) {
					res.statusCode = 400;
					res.json( {
						"error": "Could not decode request: the payload was not an array"
					} );
				} else {

					let response = [];
					// Iterate through each of the elements of the payload array
					for ( var element of payload ) {
						// Check that there is an "address", "type" and "workflow" key
						if ( typeof element.address === undefined || typeof element.type === undefined || typeof element.workflow === undefined ) {
							// Ignore it for now (i.e. don't bomb if there's on bad apple), but this should really be identified in a data test
						} else {
							// Check that the type is "htv" and the workflow is "completed"
							if ( element.type === "htv" && element.workflow === "completed" ) { // This content would of course be better provided as parameters to the POST query- i.e filter by type=foo and workflow=bar
								let concatenated_address = element.address.buildingNumber + " " +
									element.address.street + " " +
									element.address.suburb + " " +
									element.address.state + " " +
									element.address.postcode;
								let transformed_element = {
									address: concatenated_address,
									type: element.type, // Setting this to element.type rather than "htv" for possible future expansion
									workflow: element.workflow // Ditto
								};
								response.push( transformed_element );
							}
						}

					}
					// Send it
					res.statusCode = 200;
					res.json( {
						response: response
					} );
				}

			}


		}

	} );

	return api;
}