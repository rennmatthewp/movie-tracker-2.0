import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import { addFavorite, removeFavorite } from '../../actions';
import { sendFavorite, deleteFavorite } from '../../helper/api';
import './CardContainer.css';

export class CardContainer extends Component {
  handleFavorite = filmId => {
    const { user } = this.props;
    const foundInUser = user.favorites.find(film => {
      return film.movie_id === parseInt(filmId);
    });

    if (foundInUser) {
      this.handleRemoveFavorite(foundInUser);
    } else {
      this.handleAddFavorite(filmId);
    }
  };

  handleAddFavorite = filmId => {
    const { user, films, addFavorite } = this.props;
    const filmInState = films.find(film => {
      return film.movie_id === parseInt(filmId);
    });
    filmInState.favorited = 'favorited';
    addFavorite(filmInState);
    sendFavorite(user, filmInState);
  };

  handleRemoveFavorite = foundInUser => {
    const { user, removeFavorite } = this.props;
    delete foundInUser.favorited;
    removeFavorite(foundInUser);
    deleteFavorite(user, foundInUser);
  };

  render() {
    const filmCards = this.props.films.map((film, index) => (
      <Card
        user={this.props.user}
        film={film}
        key={index}
        handleFavorite={this.handleFavorite}
      />
    ));
    return <section className="CardContainer">{filmCards}</section>;
  }
}

CardContainer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
};

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: film => dispatch(addFavorite(film)),
  removeFavorite: film => dispatch(removeFavorite(film))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
