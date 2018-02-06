import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeFilms } from '../../actions';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { fetchApi } from '../../helper/api';
import { url } from '../../helper/.api-key';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const filmsArray = await fetchApi(url);
    this.props.handleFetch(filmsArray);
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

export const mapDispatchToProps = dispatch => ({
  handleFetch: films => dispatch(storeFilms(films))
});

export default connect(null, mapDispatchToProps)(App);
