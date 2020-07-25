import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditMovie extends Component {

  state = {
    newDescription: ''
  }

  returnToDetails = (event) => {
    event.preventDefault();
    this.props.history.replace('details');
  }

  saveNewDetails = (event) => {
    event.preventDefault();

    // console.log('edit descipription textarea:', this.state.newDescription, 'for id:', this.props.reduxState.description);
    // let payload = {payload: 'bark'};
    this.props.dispatch({type: "ADD_NEW_DESCRIPTION", payload: [this.state.newDescription, this.props.reduxState.description]});
    this.props.dispatch({type: "ADD_MOVIES"})
    this.props.history.replace('details');
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log('in handleChange', event.target.value)
    this.setState({
      newDescription: event.target.value
    })
  }
  
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <button onClick={this.returnToDetails}>Cancel</button><button onClick={this.saveNewDetails}>Save</button>
      <div className="edit-movie">
      <textarea placeholder="Enter new description" onChange={this.handleChange}></textarea>
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