import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import * as api from '../../helper/api';

//in addition to the two tests written but not finished:
//test MDTP
//when handleSubmit called, get user data called
//when handleSubmit called if no user exists send alert
//when handleSubmit called if user exists, calls logIn

describe('Login', () => {
  it('should match the snapshot', () => {
    const renderedLogin = shallow(<Login />);

    expect(renderedLogin).toMatchSnapshot();
  });

  it('should set state with input values on a change event', () => {
    const renderedLogin = shallow(<Login />)

    const e1 = { 
      target: {
        name: 'email',
        value: 'sickemail'
      }
    }
    const expectedState = {
      email: 'sickemail',
      password: ''
    }

    renderedLogin.instance().handleChange(e1)
    renderedLogin.update();

    expect(renderedLogin.state()).toEqual(expectedState)
  });

  it('should call handleSubmit on submit of the form', async () => {
    const mockLogin = jest.fn();
    const renderedLogin = shallow(<Login logIn={mockLogin}/>)
    const mockUser = {name: 'Jordan', email: 'email', password: 'password'}
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: mockUser
          })
      });
    });

    api.getUserData = (url, state) => mockUser;
    const mockEvent = { preventDefault: () => {} }
    await renderedLogin.instance().handleSubmit(mockEvent);
    expect(api.getUserData()).toEqual({"email": "email", "name": "Jordan", "password": "password"});
    expect(mockLogin).toHaveBeenCalled();
  });
});
