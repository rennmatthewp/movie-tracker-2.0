import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import star from '../../images/favorite.svg';
import './Card.css';

export const Card = ({ film, addFavorite }) => {
  const { poster, title, overview, date } = film;
  return (
    <article className="Card">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt="movie-poster"
      />
      <div
        className="favorite-img"
        onClick={ addFavorite }
      ></div>
      <div className="information">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{overview}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number
};
