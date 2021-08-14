// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

fetch('https://api.trello.com/1/cards/61170e13ba2a341bf6ae9833?token=a0224ee5322b96887dbc583374e58a68ecd2e443f6e1a66e500e6d59aed7809c&key=9d8a7f134d73959e67911886ac9aa64b', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));