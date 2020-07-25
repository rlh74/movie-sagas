import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditMovie extends Component {
  
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <h2>Edit Movie</h2>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(EditMovie);