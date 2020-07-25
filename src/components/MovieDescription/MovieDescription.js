import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDescription extends Component {
  componentDidMount(){
    console.log('MovieDescription mounted');
  }

  render() {
    return (
     <>
     <h2>Movie Description</h2>
     {/* {JSON.stringify(this.props.reduxState.description)} */}
     {JSON.stringify(this.props.reduxState.movies[this.props.reduxState.description - 1])}
     </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieDescription);