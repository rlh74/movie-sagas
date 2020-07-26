import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {
  componentDidMount(){
    this.props.dispatch({type: "ADD_MOVIES"})
  }

  handleClick = (event, id) => {
    // passed id input turned into a number
    id = Number(id);
    // sends id to a reducer on index in order to display selected movie
    this.props.dispatch({type: "FETCH_ID", payload: id})
    // moves to MovieDescription component
    this.props.history.push('details');
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <>
        {this.props.reduxState.movies.map((item, index)=>{
          return (
            <div className="movie-poster" key={index}>
            <img src={item.poster} alt="movies" onClick={ (event) => this.handleClick(event, item.id) }/>
            <div className="movie-description" key={index}>
            <p>{item.description}</p>
            </div>
           </div>
          )
        })}
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieList);