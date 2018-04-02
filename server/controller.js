const axios = require('axios');
let allGames = [];
let id = [];


module.exports = { 
    read: ( req, res ) => { 
      axios.get('https://bgg-json.azurewebsites.net/collection/edwalter').then(response => {
        allGames = response.data}).then(response => {
        res.send(allGames)
      })
    }, 

    filter: (req, res) => {
      let copy = allGames.slice()
  
      if(req.query.playingTime){
        copy = copy.filter((allGames) => {
          return allGames.playingTime <= req.query.playingTime
        })
      }
      
      if(req.query.players){
        copy = copy.filter((allGames) => {
          return allGames.minPlayers <= req.query.players && allGames.maxPlayers >= req.query.players
        })
      }
      
      if(req.query.averageRating){
        copy = copy.filter((allGames) => {
          return allGames.averageRating >= req.query.averageRating
    })
  }
    },
    
    create: ( req, res ) => { 
    
    }, 
    
    update: ( req, res ) => { 
     
    }, 
    
    delete: ( req, res ) => { 
     
    } 
  
  };


  