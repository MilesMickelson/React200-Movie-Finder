import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { lineItems } = this.props;
    const movie = lineItems.filter(
      lineItem => lineItem.imdbID === this.props.match.params.id
    );
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <div id='mainHeader-box'>
              <h1 id='mainHeader'>Movie Finder!</h1>
            </div>
          </div>
        </div>
        <div className='goback-wrap'>
          <button type='button' href='#' onClick={ this.goBack } className='goBack-button'>Go Back!</button>
        </div>
        <div className='moreInfo-wrapper'>
          <div className='col-12'>
            <div className='moreInfo-row'>
              <div className='infoPoster-wrapper'>
                <img role='presentation' src={ movie[0].Poster !== 'N/A' ? movie[0].Poster : null } className='info-poster' />
              </div>
              <div className='moreInfoBox-wrap'>
                <div className='col-12'>
                  <div className='moreInfo-box'>
                  <div className='col-12'>
										<div className='row'>
											<div className='moreInfo-header'>
												<p className='header-name'>Movie Details</p>
											</div>
										</div>
										<div className='row'>
											<div className='movie-title'>{ movie[0].Title !== 'N/A' ? movie[0].Title : 'No Title Available' }</div>
										</div>
										<div className='row'>
											<span className='release-year'>{ movie[0].Released !== 'N/A' ? movie[0].Released : 'No Release Data Info' }</span>
											<span className='movie-length'>{ movie[0].Runtime !== 'N/A' ? movie[0].Runtime : 'No Runtime Info' }</span>
											<span className='movie-genre'>{ movie[0].Genre !== 'N/A' ? movie[0].Genre : 'No Genre Available' }</span>
										</div>
										<div className='row'>
											<div className='plot'>{ movie[0].Plot !== 'N/A' ? movie[0].Plot : 'No Plot Description Available' }</div>
										</div>
										<div className='row'>
											<div className='awards'>{ movie[0].Awards !== 'N/A' ? movie[0].Awards : 'No Awards Available' }</div>
										</div>
										<div className='row'>
											<div className='metaScore'>metaScore: { movie[0].Metascore !== 'N/A' ? movie[0].Metascore : 'No Metascore Available' }</div>
											<div className='imdb'>imdB Rating: { movie[0].imdbRating !== 'N/A' ? movie[0].imdbRating : 'No IMDB Rating Available' }</div>
										</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailContainer;
