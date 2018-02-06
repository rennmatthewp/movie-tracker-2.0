import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';

const CardContainer = (props) => {
  const filmCards = props.films.map( (film, index) => {
      return (
        <Card {...film} key={ index } />
      )
    })

  return (
    <div>
      { filmCards }
    </div>
  )
}

const mapStateToProps = (state) => ({
  films: state.films
})



export default connect(mapStateToProps, null)(CardContainer);