import React from 'react';
import './Card.css';

export const Card = ({ poster, title, overview, date, rating, id}) => {
  return (
    <article className='Card'>
      <img className='poster' src={`https://image.tmdb.org/t/p/w500${poster}`} alt="movie-poster" />
      <div className='information'>
        <h2>{ title }</h2>
        <h3>{ date }</h3>
        <p>{ overview }</p>
      </div>
    </article>
  )
}