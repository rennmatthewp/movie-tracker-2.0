import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <input 
          type="text" 
          name='email'
          placeholder='email' 
          value={email}
        />
        <input 
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