import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Selectors from './Selectors';

class App extends Component {

  constructor (){
    super();

    this.state = {
      filterValues: [],

    }
    // this.getMyGameList = this.getMyGameList.bind(this);
  }

  componentDidMount(){
    axios.get('/api/games').then(res => {
    })
  }

  deleteGame(){

  }

  render(){
    return(
      <div className="App">
        <Selectors getMyGameList = {this.getMyGameList}/>
        <br/>
        
      </div>
    )
  }

    
}


export default App;
