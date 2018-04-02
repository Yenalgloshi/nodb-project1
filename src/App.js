import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Selectors from './Selectors';

class App extends Component {

  constructor (){
    super();

    this.state = {
      filterValues: [],
      gamesToDisplay: [],

    }
    this.getMyGameList = this.getMyGameList.bind( this );
  }

  componentDidMount(){
    axios.get('/api/games').then(res => {
      console.log(res);
    })
  }



  getMyGameList(){
    axios.get('/api/games').then( res => {
        this.setState({
          gamesToDisplay: res.data
        })
      })
  }   
    
  saveGame(){

  }

  deleteGame(){

  }

  render(){
    return(
      <div className="App">
        <Selectors />
      </div>
    )
  }

    
}


export default App;
