import React, { Component } from 'react';
import axios from 'axios';

class Selectors extends Component{
    constructor(){
        super()

        this.state = {
                playingTime: "",
                numOfPlayers: "",
                rating: "",
                gamesToDisplay: []
        }
        this.getMyGameList = this.getMyGameList.bind(this)
    }

    timeFilter(){
        let timeVal = this.refs.selectedPlayTime.value
        this.setState({playingTime:timeVal})
    }

    numPlyrFilter(){
        let numPVal = this.refs.selectedNumPlyrs.value
        this.setState({numOfPlayers:numPVal})
    }

    ratingFilter(){
        let ratingVal = this.refs.selectedAvgRating.value
        this.setState({rating:ratingVal})
    }

    getMyGameList(){
        let query = this.makeQuery()
        console.log(query)
        axios.post(`/api/games?${ query }`).then( res => {
            console.log(res.data)
            this.setState({
              gamesToDisplay: res.data
            })
          })
      }   

    resetGameList(){

    }  
    
    makeQuery(){
        let obj = {
            playingTime: this.state.playingTime,
            players: this.state.numOfPlayers,
            averageRating: this.state.rating
        }
        let newSearch = new URLSearchParams()
        for (let prop in obj){
          newSearch.append(prop, obj[prop])
        }

        return newSearch.toString()
      }

    render() {
        let games = this.state.gamesToDisplay.map((game, i) => {
            return(
                <div>
                    {game.name}
                </div>
            )
        })
        return (
          <div className="">
          <h1>Tabletop Game Finder</h1>
            <div className=''>
              <div className='btn-dropDown'>
                
                <select onChange={() => this.timeFilter() }
                        ref='selectedPlayTime'
                        className='btn-sp'
                        value={this.state.playingTime}>
                  <option value="" disabled>Filter by play time</option>
                  <option value="15">15 min or less</option>
                  <option value="30">30 min or less</option>
                  <option value="45">45 min or less</option>
                  <option value="60">60 min or less</option>
                  <option value="90">90 min or less</option>
                </select>
    
                <select onChange={() => this.numPlyrFilter() }
                        ref='selectedNumPlyrs'
                        className='btn-sp'
                        value={this.state.numOfPlayers}>
                  <option value="" disabled>How many players?</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                </select>
    
                <select onChange={() => this.ratingFilter() }
                        ref='selectedAvgRating'
                        className='btn-sp'
                        value={this.state.rating}>
                  <option value="" disabled>Avg. game rating</option>
                  <option value="4">+4</option>
                  <option value="5">+5</option>
                  <option value="6">+6</option>
                  <option value="7">+7</option>
                  <option value="8">+8</option>
                </select>
                <br/>
                <br/>

                <div className="bttm-btns">
                    <button className='go-btn'
                            onClick={ this.getMyGameList }>
                        Find Me Some Games To Play!
                    </button>
                    <button className='reset-btn'
                            onClick={ this.resetGameList }>
                        Reset game list
                    </button>
                </div>
              
              </div> 
            </div>
            
            <div className="game-list">
                <p className="list-title">Here are some games you should try!</p>
                <br/>
                {games}
            </div>   
          
          </div>
        );
    }
}

function makeQuery( obj){
    let newSearch = new URLSearchParams()
    for (let prop in obj){
      newSearch.append(prop, obj[prop])
    }
    return newSearch.toString()
}

export default Selectors;