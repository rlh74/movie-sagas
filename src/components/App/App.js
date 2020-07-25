import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDescription from '../MovieDescription/MovieDescription';
import EditMovie from '../EditMovie/EditMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={MovieList}/>
        <Route exact path="/details" component={MovieDescription}/>
        <Route exact path="/edit" component={EditMovie}/>

      </div>
      </Router>
    );
  }
}

export default App;
