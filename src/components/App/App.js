import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeFilms } from '../../actions';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { fetchApi } from '../../helper/api'
import { url } from '../../helper/.api-key';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.handleFetch(url);
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

const mapStateToProps = (state) => ({
  films: state.films
})

const mapDispatchToProps = (dispatch) => ({
  handleFetch: async(url) => dispatch(storeFilms( await fetchApi(url)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
