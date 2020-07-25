import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDescription extends Component {

  routeToHome = (event) => {
    event.preventDefault();
    console.log('router OK');
    this.props.history.push('/');
  }

  routeToEdit = (event, id) => {
    event.preventDefault();
    console.log('id to edit:', id)
    this.props.history.replace('edit')
  }

  render() {
    return (
     <>
     <button onClick={this.routeToHome}>Back To List</button>{this.props.reduxState.description ? <button onClick={(event) => this.routeToEdit(event, this.props.reduxState.movies[this.props.reduxState.description - 1].id)}>Edit</button> : ''}
     <h2>Movie Description</h2>
     <div className="movie-description">
       
        <>{this.props.reduxState.description ? <><h2>{this.props.reduxState.movies[this.props.reduxState.description - 1].title}</h2>{this.props.reduxState.movies[this.props.reduxState.description - 1].description}</> : ''} </>
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