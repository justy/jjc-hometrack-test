'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _package = require('../../package.json');

var _express = require('express');

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	api.post('/', function (req, res) {

		// Examine the body
		var body = req.body;

		if (body === undefined) {
			res.statusCode = 400;
			res.json({
				"error": "Could not decode request: no body provided"
			});
		} else {
			// Examine the payload
			var payload = body.payload;

			if (payload === undefined) {
				res.statusCode = 400;
				res.json({
					"error": "Could not decode request: no payload provided"
				});
			} else {

				// Check the payload is an array
				if (!Array.isArray(payload)) {
					res.statusCode = 400;
					res.json({
						"error": "Could not decode request: the payload was not an array"
					});
				} else {

					var response = [];
					// Iterate through each of the elements of the payload array
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = payload[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var element = _step.value;

							// Check that there is an "address", "type" and "workflow" key
							if (_typeof(element.address) === undefined || _typeof(element.type) === undefined || _typeof(element.workflow) === undefined) {
								// Ignore it for now (i.e. don't bomb if there's on bad apple), but this should really be identified in a data test
							} else {
								// Check that the type is "htv" and the workflow is "completed"
								if (element.type === "htv" && element.workflow === "completed") {
									// This content would of course be better provided as parameters to the POST query- i.e filter by type=foo and workflow=bar
									var concatenated_address = element.address.buildingNumber + " " + element.address.street + " " + element.address.suburb + " " + element.address.state + " " + element.address.postcode;
									var transformed_element = {
										concataddress: concatenated_address,
										type: element.type, // Setting this to element.type rather than "htv" for possible future expansion
										workflow: element.workflow // Ditto
									};
									response.push(transformed_element);
								}
							}
						}
						// Send it
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					res.statusCode = 200;
					res.json({
						response: response
					});
				}
			}
		}
	});

	return api;
};
//# sourceMappingURL=index.js.map