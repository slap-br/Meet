// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';


class App extends Component {
  render() {
    return (
      <div className="App">
          <EventList />
          <CitySearch />
      </div>
    );
  }
}

export default App;