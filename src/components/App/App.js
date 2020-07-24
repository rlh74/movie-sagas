import React, { Component } from 'react';
import './App.css';
import ListMovies from '../ListMovies/ListMovies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <ListMovies/>
      </div>
    );
  }
}

export default App;
