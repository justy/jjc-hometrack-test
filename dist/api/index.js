'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _facets = require('./facets');

var _facets2 = _interopRequireDefault(_facets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	// // mount the facets resource
	// api.use('/facets', facets({ config, db }));


	api.post('/', function (req, res) {

		// Examine the payload
		var payload = req.body.package.json;

		if (payload === undefined) {
			res.json({ "error": "Could not decode request: no payload provided" });
			res.send(400);
		} else {}
	});

	return api;
};
//# sourceMappingURL=index.js.map