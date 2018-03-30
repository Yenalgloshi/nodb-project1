import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor (){
    super();

    this.state = {
      someArray: [],
      apiUrl:'https://bgg-json.azurewebsites.net/collection/edwalter'
    }
  }

componentDidMount(){
  axios.get('/api/games').then(res => {
    console.log(res);
  })
}

   
    

render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
