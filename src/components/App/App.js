import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { storeFilms, logIn } from '../../actions';
import { getFilms, getFromStorage } from '../../helper/api';
import { url } from '../../helper/.api-key';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const filmsArray = await getFilms(url);
    this.props.handleFetch(filmsArray);
    let user = getFromStorage();
    if (user) {
      this.props.logIn(user);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  handleFetch: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  handleFetch: films => dispatch(storeFilms(films)),
  logIn: user => dispatch(logIn(user))
});
export default withRouter(connect(null, mapDispatchToProps)(App));