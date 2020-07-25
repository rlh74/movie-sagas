import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDescription extends Component {
  // state = {
  //   description: ''
  // }
  componentDidMount(){
    // console.log('MovieDescription mounted', this.props.reduxState.movies);
    // this.props.dispatch({type: "ADD_MOVIES"})
    // console.log('DESCRIPTION: redux state props are', this.props.reduxState.movies)
    
  }

  render() {
    return (
     <>
     <h2>Movie Description</h2>
     <div className="movie-description">
        <p>{this.props.reduxState.description ? this.props.reduxState.movies[this.props.reduxState.description - 1].description : ''} </p>
      </div>
      {/* <p>try this :D {this.props.reduxState.description ? JSON.stringify(this.props.reduxState.movies[this.props.reduxState.description - 1].description) : 'no' }</p> */}
     </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieDescription);