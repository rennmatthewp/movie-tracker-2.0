import React from 'react';

export const Card = ({ poster, title, overview, date, rating, id}) => {
  return (
    <article className='Card'>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="movie-poster" />
      <h2>{ title }</h2>
      <h3>{ date }</h3>
      <p>{ overview }</p>
    </article>
  )
}