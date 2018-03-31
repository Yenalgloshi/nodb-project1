import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor (){
    super();

    this.state = {
      filterValues: [],
      gamesToDisplay: []
    }
  }

componentDidMount(){
  axios.get('/api/games').then(res => {
    console.log(res);
  })
}

getMyGameList(){
  axios.get('/api/games')
    promise.then( res => {
      this.setState({
        gamesToDisplay: res.data
      })
    })
}   
    
saveGame(){

}

deleteGame(){

}



render() {
    return (
      <div className="App">
        <div className=''>
          <div className='btn-dropDown'>
            <button className='get-game-list btn' 
                    onClick={ this.getMyGameList }>
              Get A List Of Games
            </button>

            <select onChange={ this.filterByPlayTime }
                    ref='selectedPlayTime'
                    className='btn-sp'
                    value="">
              <option value="" disabled>Filter by play time</option>
              <option value="15min">Less than 15 min</option>
              <option value="30min">Less than 30 min</option>
              <option value="45min">Less than 45 min</option>
              <option value="60min">Less than 60 min</option>
              <option value="90min">Less than 90 min</option>
            </select>

            <select ref='selected#OfPlayers'
                    onChange={ this.filterByNumPlayers }
                    className='btn-sp'
                    value="">
              <option value="" disabled>How many players?</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
            </select>

            <button className='go-btn btn'
                    onClick={ this.getMyGameList }>
              Find Me Some Games To Play!
            </button>
          </div> 
        </div>
      </div>
    );
  }    
}


export default App;
