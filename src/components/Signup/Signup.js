import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from "../../actions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      error: false 
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, password, email } = this.state
    const stringState = JSON.stringify({ name, password, email })
    try {
      const initialFetch = await fetch('http://localhost:3000/api/users/new', {
        method: 'POST',
        body: stringState,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      if (initialFetch.status <= 200) {
        const user = { name, password, email };
        this.props.logIn(user);
      } else {
        throw new Error('Bad response stats')
      }
    } catch(error) {
      this.setState({ 
        name: '', 
        password: '', 
        email: '',
        error: true })
    }
  };

  render() {
    const { email, password, name } = this.state;
    const displayError = this.state.error ? <div>UNABLE TO CREATE ACCOUNT AT THIS TIME</div> : <div></div>
    return (
      <form onSubmit={this.handleSubmit}>
      { displayError }
      <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="password"
          placeholder="Password"
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)) 
})

export default connect(null, mapDispatchToProps)(Signup);
