import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = props => {
  const filmCards = props.films.map((film, index) => (
    <Card {...film} key={index} />
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

export const mapStateToProps = state => ({
  films: state.films
});

export default connect(mapStateToProps, null)(CardContainer);
