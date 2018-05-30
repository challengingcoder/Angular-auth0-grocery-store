const request = require("request");

const token;
const api = 'https://whereinmarket.auth0.com/api/v2/api/v2';

const options = { method: 'POST',
  url: 'https://whereinmarket.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'client_credentials',
     client_id: 'ZCYENiv9XlVnmFHzROFAzVcmrOEVlces',
     client_secret: 'C0HEDzEE0oCdxnfUw8IWkCd9JG8CtfHVa1kzxokkY_jmWkZtM9BvJuOye9w_PrCW',
		 audience: 'https://whereinmarket.auth0.com/api/v2/' 
		},
	json: true 
};


validate(options, function (error, response, body) {
  if (error) throw new Error(error);

  var token = body;
});


function getUsers(req, res) {

	var options = { method: 'GET',
		url: api + '/users-by-email',
		qs: { q: req, search_engine: 'v3' },
		headers: { authorization: 'Bearer' + token } };

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		return body;
	});
}

function getEmails(req, res) {
	var options = { method: 'GET',
		url: api + '/users',
		qs: { q: req, search_engine: 'v3' },
		headers: { authorization: 'Bearer' + token } };

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		return body;
	});
}
