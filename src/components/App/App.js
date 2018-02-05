import React, { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { fetchApi } from '../../helper/api'
import { url } from '../../helper/.api-key';

class App extends Component {
  constructor() {
    super()

    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetchApi(url);
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

export default App;
