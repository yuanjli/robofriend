import React, { Component } from 'react';
import './App.css';
import CardlistComponent from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots';   // for the ones that aren't default exports
// we have to use {} to destructure it.


// This is a smart component, because it has state, and tend to have class syntax
class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    //console.log('constructor')
  }


  // lifecycle methods react / also called lifecycle hooks    
  // Mounting, updating(whenever the component changes), Unmounting
  // componentDidMount() gets called after render()
  componentDidMount() {
    // console.log('Checking!')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    console.log('componentDidMount')
  }


// the event happened in the input in search box
// everything when we make our own methods , use arrow functions
  onSearchChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value })
  }


  // part of react functions doesn't need arrow functions.
  render() {
    const { robots, searchfield } = this.state;  // setting a reference 
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log('render')
    if (!robots.length) {
      return <h1> Loading </h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <CardlistComponent robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
