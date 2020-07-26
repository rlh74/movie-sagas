import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDescription extends Component {

  state = {
    genres: []
  }

  componentDidMount = () => {
    console.log('movie description component')
    this.props.dispatch({type: "ADD_MOVIES"})
    this.props.dispatch({type: "ADD_GENRES"})
    this.matchGenreToMovie();
  }

  matchGenreToMovie = () => {
    let genres = this.props.reduxState.genres

    console.log('number of genres:', genres.length);
    for (let i=0; i<genres.length; i++){
      if (genres[i].movie_id === this.props.reduxState.description) {
        this.state.genres.push(genres[i].name)
        console.log('for if:',genres[i].name)
      } else {
        console.log('no genres to display');
      }
    }
    console.log('state is', this.state)
    
  }
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
     {JSON.stringify(this.props.reduxState.genres.name)}
     <div className="movie-description">
       {/* RENDERS MOVIE DESCRIPTION */}
        <>{this.props.reduxState.description ? <><h2>{this.props.reduxState.movies[this.props.reduxState.description - 1].title}</h2>{this.props.reduxState.movies[this.props.reduxState.description - 1].description}</> : ''} </>
        {/* RENDERS MOVIE GENRES */}
        {this.state.genres.map((item, index)=>{
          return (
            <li key={index}>{item}</li>
          )
        })}
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