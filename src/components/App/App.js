import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeFilms } from '../../actions';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { fetchApi } from '../../helper/api'
import { url } from '../../helper/.api-key';
import './App.css';

export class App extends Component {
  //add export for testing

  componentDidMount() {
    //call fetch api url and store in a variable
    //pass fetch int this.props.handleFetch
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

export const mapStateToProps = (state) => ({
  films: state.films
})

export const mapDispatchToProps = (dispatch) => ({
  //don't do async/await 
  handleFetch: async(url) => dispatch(storeFilms( await fetchApi(url)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
