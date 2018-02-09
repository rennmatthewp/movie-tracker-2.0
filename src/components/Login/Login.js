import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from "../../actions";
import { fetchApi } from '../../helper/api';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { data } = await fetchApi('http://localhost:3000/api/users');
    const { email, password } = this.state;
    const user = data.find(user => {
      return user.email === email && user.password === password;
    });
    user ? this.props.logIn(user) : alert('try again looser')
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="email"
          placeholder="email"
          value={email}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="password"
          placeholder="password"
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

export default connect(null, mapDispatchToProps)(Login);
