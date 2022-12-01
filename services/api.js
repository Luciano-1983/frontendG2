const axios = require('axios').default;


// Pode ser algum servidor executando localmente: 
//baseURL: "https://cuidadorb.azurewebsites.net",
//http://localhost:3000

const api = axios.create({ 
  baseURL: "https://cuidadorb.azurewebsites.net",
});

module.exports = api;
