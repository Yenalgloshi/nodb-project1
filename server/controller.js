const axios = require('axios');
let gamesList = [];
let id = [];


module.exports = { 
    read: ( req, res ) => { 
      axios.get('https://bgg-json.azurewebsites.net/collection/edwalter').then(response => {
        gamesList = response.data}).then(response => {
        res.send(gamesList)
      })
    }, 
    
    create: ( req, res ) => { 
    
    }, 
    
    update: ( req, res ) => { 
     
    }, 
    
    delete: ( req, res ) => { 
     
    } 
  
  };


  