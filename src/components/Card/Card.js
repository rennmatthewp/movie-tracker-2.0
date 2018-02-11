/*eslint-disable camelcase*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  determineWarning = event => {
    if (!this.props.user.name) {
      this.setState({ 
        clicked: true
      });
    } else {
      this.props.handleFavorite(event.target.id);
    }
  };

  toggleFavorite = event => {
    if (this.state.clicked === false) {
      this.determineWarning(event);
    } else {
      this.setState({
        clicked: false
      });
    }
  };

  render() {
    const warningDiv = this.state.clicked ? (
      <div className="warning">
        <h3> Please login or create an account to favorite </h3>
        <button onClick={this.toggleFavorite}> Close </button>
      </div>
    ) : (
      <div />
    );

    const {
      movie_id,
      title,
      release_date,
      overview,
      poster_path
    } = this.props.film;

    return (
      <article className="Card">
        <button
          className="favorite-img"
          id={movie_id}
          onClick={this.toggleFavorite}
        />
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="movie-poster"
        />
        {warningDiv}
        <div className="information">
          <h2>{title}</h2>
          <h3>{release_date}</h3>
          <p>{overview}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  film: PropTypes.shape({
    movie_id: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string
  }),
  user: PropTypes.object,
  handleFavorite: PropTypes.func
};
