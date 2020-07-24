import React, { Component } from 'react';
// import {connect} from 'react-redux';

class MovieItem extends Component {
  componentDidMount(){
    console.log('MovieItem mounted');
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <li>
        <img src={this.props.item.poster} alt="movies"/>
      </li>
    );
  }
}

// const mapReduxStateToProps = (reduxState) => ({
//   reduxState
// });

// export default connect(mapReduxStateToProps)(MovieItem);
export default MovieItem;