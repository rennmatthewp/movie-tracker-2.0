import React from 'react';
import { Card } from '../Card/Card';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions'
import { sendFavorite } from '../../helper/api';
import './Favorites.css';

export const Favorites = (props) => {

  const handleFavorite = (filmId) => {
    const { user, addFavorite, removeFavorite, films } = this.props;
    const found = films.find( film => {
      return film.movie_id === parseInt(filmId)
    });
    const foundInUser = user.favorites.find(film => {
      return film.movie_id === parseInt(filmId)
    });
    foundInUser ? removeFavorite(foundInUser) : (addFavorite(found), sendFavorite(user, found))
  }

  const films = props.user.favorites.map((film, index) => {
    return (
      <Card user={props.user} 
        film={film} 
        key={index}
        handleFavorite={handleFavorite} 
      />
    )
  })
  return (
    <section className='Favorites'>
    { films }
    </section>
  )
}

export const mapStateToProps = store => ({
  user: store.user,
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: film => dispatch(addFavorite(film)),
  removeFavorite: film => dispatch(removeFavorite(film))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);