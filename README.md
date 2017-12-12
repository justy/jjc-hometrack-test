# Hometrack API test solution by Justin James Clayden

- [ ] Injest JSON request via POST.  This will be an array of addresses, and this array will be the value of the "payload" key.
- [ ] Return filtered results for all elements of that array that have the key "workflow" set to "completed", and the "type" ket set to "htv".
- [ ] Construct results as objects with three attributes:
1. A concatenation of the address object fields
2. The type
3. The workflow
- [ ] Return an error message if the POST body is not correctly formatted JSON.

URL for this API is http://justy-hometrack-test.herokuapp.com/api

Note: Express ES6 REST API boilerplate derived from: https://github.com/developit/express-es6-rest-api


