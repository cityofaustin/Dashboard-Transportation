import React, { Component } from 'react';
import Card from "mapboard-components/build/Card/Card.js";
import {data} from './objects';
import './Operations.css'

class Operations extends Component {
  constructor(props){
    super(props);

    this.state = {
      year : 2018
    }

  }

  handleClick = e => {
      e.preventDefault();
      this.setState({
          year: e.target.value
      })
  };
  render() {
    return (
      <div className="App black">
          {data.map((item, index) => {
              return <Card className="flex-card" year={this.state.year} config={item} key={index}/>
          })}
              <ul>
                  <li value={2016} onClick={this.handleClick}>2016</li>
                  <li value={2017} onClick={this.handleClick}>2017</li>
                  <li value={2018} onClick={this.handleClick}>2018</li>
              </ul>
      </div>
    );
  }
}

export default Operations;
