import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XD8mzv9CyiJWYcH2zMNMyrb1bbG2PVLZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = { 
      reviews: [],
      searchTerm: ''
    }
  
    render() {
      return (
        <div className='searchable-movie-reviews'>
          <form>
            <input type='text' />
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
  
    componentDidMount() {
      fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))
    }
  }
  export default SearchableMovieReviewsContainer;