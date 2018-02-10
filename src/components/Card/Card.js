import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  determineWarning = (e) => {
    if(!this.props.user.name) {
      this.setState({
        clicked: true
      })
    } else {
      this.props.handleFavorite(e.target.id)
    }
  }

  toggleFavorite = (e) => {
    if(this.state.clicked === false) {
     this.determineWarning(e)
    } else {
      this.setState({
        clicked: false
    })
    }
  }
  
  render() {
    const warningDiv = this.state.clicked ? 
      <div className='warning'>
        <h3> Please login or create an account to favorite </h3>
        <button onClick={ this.toggleFavorite }> Close </button>
      </div> :
      <div></div>

    const { id, title, date, overview, poster } = this.props.film

    return (
      <article className="Card">
        <button
          className="favorite-img"
          id={ id }
          onClick={this.toggleFavorite}
        />
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="movie-poster"
        />
        { warningDiv }
        <div className="information">
          <h2>{title}</h2>
          <h3>{date}</h3>
          <p>{overview}</p>
        </div>
      </article>
    );
  }
};

Card.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number
};
