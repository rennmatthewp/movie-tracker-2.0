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

  it('should call handleSubmit on submit of the form', async () => {
    const mockLogin = jest.fn();
    const renderedLogin = shallow(<Login logIn={mockLogin}/>)
    const mockUser = {name: 'Jordan', email: 'email', password: 'password'}

    api.getUserData = (url, state) => mockUser;
    const mockEvent = { preventDefault: () => {} }
    await renderedLogin.instance().handleSubmit(mockEvent);
    expect(api.getUserData()).toEqual({"email": "email", "name": "Jordan", "password": "password"});
    expect(mockLogin).toHaveBeenCalled();
  });

  xit('should call handleInputChange onChange of the inputs', () => {});

  xit('handleInputChange should set state with input values', () => {});


  xit('should call handleSubmit on submit of the form', () => {});
});
