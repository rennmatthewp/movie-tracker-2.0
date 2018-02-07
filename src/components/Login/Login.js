import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../../helper/api';
import fetch from 'node-fetch';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const users = await fetch('http://localhost:3000/api/users')
    const userData = await users.json()
    console.log(userData)
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          type="text" 
          name='email'
          placeholder='email' 
          value={email}
        />
        <input onChange= {this.handleChange}
          type="text" 
          name='password'
          placeholder='password' 
          value={password}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
    )
  }
}

export default Login;