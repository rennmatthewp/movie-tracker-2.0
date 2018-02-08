import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from "../../actions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const stringState = JSON.stringify(this.state)
    const initialFetch = await fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: stringState,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    const parsedFetch = await initialFetch.json()
    console.log(parsedFetch)
    // const { name, email, password } = this.state;
    // const user = data.find(user => {
    //   return user.email === email && user.password === password;
    // });
    // user ? this.props.logIn(user) : alert('try again looser')
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
