import React, { Component } from 'react';
// import MovieItem from '../MovieItem/MovieItem';
import {connect} from 'react-redux';

class MovieList extends Component {
  componentDidMount(){
    console.log('MovieList mounted');
    this.props.dispatch({type: "ADD_MOVIES"})
  }

  handleClick = (event, id) => {
    id = Number(id);
    console.log('movieItem click handler id is:', id);
    this.props.dispatch({type: "FETCH_ID", payload: id})
    this.props.history.push(`details/`);
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        {this.props.reduxState.movies.map((item, index)=>{
          return (
            <div className="movie-poster" key={index}>
            <img src={item.poster} alt="movies" onClick={ (event) => this.handleClick(event, item.id) }/>
            <p>{item.description}</p>
           </div>
          )
        })}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieList);