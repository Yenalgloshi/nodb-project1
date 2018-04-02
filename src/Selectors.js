import React, { Component } from 'react';
import axios from 'axios';

class Selectors extends Component{
    constructor(){
        super()

        this.state = {
            filterValues: {
                playingTime: "",
                numOfPlayers: "",
                rating: ""
            }
        }
    }

    timeFilter(){
        let timeVal = this.refs.selectedPlayTime.value
        this.setState({playingTime:value})
    }

    numPlyrFilter(){
        let numPVal = this.refs.selectedNumPlyrs.value
        this.setState({numOfPlayers:value})
    }

    ratingFilter(){
        let ratingVal = this.refs.selectedAvgRating.value
        this.setState({rating:value})
    }


    render() {
        return (
          <div className="">
          <h1>Tabletop Game Finder</h1>
            <div className=''>
              <div className='btn-dropDown'>
                
                <select onChange={() => this.timeFilter() }
                        ref='selectedPlayTime'
                        className='btn-sp'
                        value="">
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
                        value="">
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
                        value="">
                  <option value="" disabled>Avg. game rating</option>
                  <option value="4">+4</option>
                  <option value="5">+5</option>
                  <option value="6">+6</option>
                  <option value="7">+7</option>
                  <option value="8">+8</option>
                </select>
    
                <br/>
                <button className='go-btn btn'
                        onClick={ this.getMyGameList }>
                  Find Me Some Games To Play!
                </button>
                <br/>
              </div> 
              <p></p>
            </div>
          </div>
        );
    }
}

export default Selectors;