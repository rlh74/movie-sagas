import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditMovie extends Component {

  state = {
    newDescription: '',
    newGenre: ''
  }

  returnToDetails = (event) => {
    event.preventDefault();
    this.props.history.replace('details');
  }

  saveNewDetails = (event) => {
    event.preventDefault();
    if (this.state.newGenre === '' && this.state.newDescription === ''){
      alert('no details to add');
    } else if (this.state.newDescription === ''){
      this.props.dispatch({type: "ADD_NEW_GENRE", payload: [this.state.newGenre, this.props.reduxState.description]})
      this.props.history.replace('details');
    } else if (this.state.newGenre === ''){
      this.props.dispatch({type: "ADD_NEW_DESCRIPTION", payload: [this.state.newDescription, this.props.reduxState.description]});
      this.props.history.replace('details');
    } else {
      this.props.dispatch({type: "ADD_NEW_GENRE", payload: [this.state.newGenre, this.props.reduxState.description]})
      this.props.dispatch({type: "ADD_NEW_DESCRIPTION", payload: [this.state.newDescription, this.props.reduxState.description]});
      this.props.history.replace('details');
    }
    // this.props.dispatch({type: "ADD_NEW_DESCRIPTION", payload: [this.state.newDescription, this.props.reduxState.description]});
    // this.props.history.replace('details');
    this.setState({
      newDescription: ''
    })
  }

  handleGenre = (event) => {
    event.preventDefault();
    console.log('in handleChange', event.target.value)
    this.setState({
      newGenre: event.target.value
    })
  }

  handleDescription = (event) => {
    event.preventDefault();
    this.setState({
      newDescription: event.target.value
    })
  }
  
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <div className="edit-movie">
      <h2>Edit Movie</h2>
      <textarea placeholder="Enter new description" onChange={this.handleDescription}></textarea>
      <textarea placeholder="Enter genre" onChange={this.handleGenre}></textarea><br/>
      <button onClick={this.returnToDetails}>Cancel</button><button onClick={this.saveNewDetails}>Save</button>
      </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(EditMovie);