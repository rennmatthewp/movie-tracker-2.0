import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import { Redirect } from 'react-router-dom';
import './CardContainer.css';

export const CardContainer = props => {

  const addFavorite = () => {
    if(!props.user.name) {
      props.history.push('/login');
    }
  }

  const filmCards = props.films.map((film, index) => (
    <Card film={ film } key={index} addFavorite={addFavorite}/>
  ));

  return (
    <section className="CardContainer">
      {filmCards}
    </section>
  );
};

CardContainer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = store => ({
  films: store.films,
  user: store.user
});

export default connect(mapStateToProps, null)(CardContainer);
