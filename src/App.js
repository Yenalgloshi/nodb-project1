import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor (){
    super();

    this.state = {
      someArray: [],
      baseUrl:''
    }
  }

    componentDidMount(){
      // axios.get('/api/stuff').then(res => {
      //   // do stuff with res.data
      // })
    }

    

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
