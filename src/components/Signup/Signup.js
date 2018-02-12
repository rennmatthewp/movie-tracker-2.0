import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import { postFetch, getUserData } from '../../helper/api';
import PropTypes from 'prop-types';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      error: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { name, password, email } = this.state;
    const stringState = { name, password, email };
    const url = 'users/new';
    try {
      await postFetch(url, stringState, 'POST');
      const user = await getUserData(
        'http://localhost:3000/api/users',
        this.state
      );
      this.props.logIn(user);
    } catch (error) {
      this.setState({
        name: '',
        password: '',
        email: '',
        error: true
      });
    }
  };

  render() {
    const { email, password, name } = this.state;
    const displayError = this.state.error ? (
      <div>UNABLE TO CREATE ACCOUNT AT THIS TIME :(</div>
    ) : (
      <div />
    );
    return (
      <form onSubmit={this.handleSubmit}>
        {displayError}
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={this.handleChange}
          type="email"
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

Signup.propTypes = {
  logIn: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
});

export default connect(null, mapDispatchToProps)(Signup);
