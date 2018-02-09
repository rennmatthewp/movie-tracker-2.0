import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import { addFavorite } from '../../actions'
import { Redirect } from 'react-router-dom';
import './CardContainer.css';

export class CardContainer extends Component{
  constructor(props) {
    super(props);


  }

  handleFavorite = (filmId) => {
    console.log(filmId)
    //find the film Id in user favorites from backend
    //if there, remove it from favorites
    //if not there, add it to favorites
    //post either result to DB
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
  addFavorite: film => dispatch(addFavorite(film))
})

export default connect(mapStateToProps, null)(CardContainer);
