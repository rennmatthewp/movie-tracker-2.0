import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import { addFavorite, removeFavorite } from '../../actions'
import { Redirect } from 'react-router-dom';
import './CardContainer.css';

export class CardContainer extends Component{
  handleFavorite = (filmId) => {
    const { user, addFavorite, removeFavorite, films } = this.props;
    const found = films.find( film => {
      return film.id === parseInt(filmId)
    });
    const foundInUser = user.favorites.find(film => {
      return film.id === parseInt(filmId)
    });
    foundInUser ? removeFavorite(foundInUser) : addFavorite(found)
  }

  render() {
    const filmCards = this.props.films.map((film, index) => (
      <Card user={this.props.user} 
        film={film} 
        key={index}
        handleFavorite={this.handleFavorite} 
      />
  ));
    return (
      <section className="CardContainer">
        {filmCards}
      </section>
    );
  }
};

CardContainer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = store => ({
  films: store.films,
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: film => dispatch(addFavorite(film)),
  removeFavorite: film => dispatch(removeFavorite(film))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
