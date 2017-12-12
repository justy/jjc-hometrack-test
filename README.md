# Hometrack API test solution by Justin James Clayden

- [x] Injest JSON request via POST.  This will be an array of addresses, and this array will be the value of the "payload" key.
- [x] Return filtered results for all elements of that array that have the key "workflow" set to "completed", and the "type" ket set to "htv".
- [x] Construct results as objects with three attributes:
1. A concatenation of the address object fields
2. The type
3. The workflow
- [x] Return an error message if the POST body is not correctly formatted JSON.
- [x] Return an error message if there is no "payload"
- [x] Return an error message if the payload is not an array

URL for this API is http://justy-hometrack-test.herokuapp.com/api

Note: Express ES6 REST API boilerplate derived from: https://github.com/developit/express-es6-rest-api


