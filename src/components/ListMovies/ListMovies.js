import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import {connect} from 'react-redux';

class ListMovies extends Component {
  componentDidMount(){
    console.log('ListMovies mounted');
    this.props.dispatch({type: "MOUNT_MOVIES"})
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        {/* {JSON.stringify(this.props.reduxState.movies)} */}
        {this.props.reduxState.movies.map((item, index)=>{
          return (
            <MovieItem key={index} item={item}/> 
          )
        })}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ListMovies);