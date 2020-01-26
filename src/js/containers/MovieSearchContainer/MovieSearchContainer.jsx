import React from 'react';
import MovieDetailContainer from '../MovieDetailContainer/MovieDetailContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { updateMovieSearch, fetchMovies } from './searchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.fetchDataClick = this.fetchDataClick.bind(this);
  }

  clickHandler(event) {
    window.location.assign(`/#/movie/${event.target.value}`);
  }

  handleMovieInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovieSearch(value));
  }

  fetchDataClick(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(fetchMovies(value));
  }

  render() {
    const { movie, lineItems } = this.props;
    return (
      <Router>
      <div>
        <div className='row'>
          <div className='col-12'>
            <div id='mainHeader-box'>
              <h1 id='mainHeader'>Movie Finder!</h1>
            </div>
          </div>
        </div>
        <div id='movieSearch-wrap'>
          <div className='search-bar'>
            <input type='text' placeholder='Enter movie here' name='search' id='movieInput' value={ movie } onChange={ this.handleMovieInput } />
            <button className='search' type='text' value={ movie } onClick={ this.fetchDataClick }><i className='fa fa-search' /></button>
          </div>
        </div>
        <div className='col-12'>
          <div className='row'>{ lineItems.map(lineItem => (
            <div className='movie-box'>
              <div className='poster-wrap'>
                <img role='presentation' src={ lineItem.Poster !== 'N/A' ? lineItem.Poster : null } className='movie-poster' />
              </div>
              <div className='info-box'>
                <div className='info-column'>
                  <div className='row'>
                    <div className='movie-title'>{ lineItem.Title !== 'N/A' ? lineItem.Title : 'No Title Available' }</div>
                  </div>
                  <div className='row'>
                    <div className='release-year'>{ lineItem.Year !== 'N/A' ? lineItem.Year : 'No Release Data Information Available' }</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='plot'>{ lineItem.Plot !== 'N/A' ? lineItem.Plot : 'No Plot Information Available' }</div>
                  </div>
                  <div className='moreInfo-row'>
                    <button type='button' onClick={ this.clickHandler } value={ lineItem.imdbID } id={ 'frog' + lineItems.indexOf(lineItem) } className='more-info-button'>More Information</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        <Route path='/movie/:id' component={ MovieDetailContainer } />
      </div>
      </Router>
    );
  }
}

export default MovieSearchContainer;
