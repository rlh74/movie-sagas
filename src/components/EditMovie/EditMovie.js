import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditMovie extends Component {

  returnToDetails = (event) => {
    event.preventDefault();
    this.props.history.replace('details');
  }
  
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <button onClick={this.returnToDetails}>Cancel</button><button>Save</button>
      <div className="edit-movie">
      <textarea placeholder="Enter new description"></textarea>
      <textarea placeholder="Enter genre"></textarea>
      </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(EditMovie);