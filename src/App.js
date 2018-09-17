import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardlistComponent from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';   // for the ones that aren't default exports
// we have to use {} to destructure it.

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

// the event happened in the input in search box
// everything when we make our own methods , use arrow functions
    onSearchChange = (event) => {
      //console.log(event.target.value);
      this.setState({ searchfield: event.target.value })
    }


  render() {
      const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
  
    return (
      <div className="App tc">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RoboFriends</h1>
        </header>

        <SearchBox searchChange={this.onSearchChange} />
        <CardlistComponent robots={filteredRobots} />

      </div>
    );
  }
}

export default App;
