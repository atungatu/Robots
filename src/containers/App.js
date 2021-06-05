import React, { Component } from 'react';
import Robots from '../components/Robots';
import SearchBox from '../components/SearchBox';
import 'tachyons';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'robots': [],
      'searchField': ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ 'robots': users, }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots =
      robots.filter(robot =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className='tc'>
        {/* <Func para={'This is a function'} />
        <Clas para={'This is a class'} /> */}
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Robots
            key={'1'}
            robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }

}

export default App;
