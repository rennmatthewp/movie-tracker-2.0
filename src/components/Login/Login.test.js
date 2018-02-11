import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import * as api from '../../helper/api';

describe('Login', () => {
  it('should match the snapshot', () => {
    const renderedLogin = shallow(<Login />);

    expect(renderedLogin).toMatchSnapshot();
  });

  it('should start with a default state of empty strings for email and password', () => {
    const renderedLogin = shallow(<Login />);

    expect(renderedLogin.state()).toEqual(
      {
        email: '',
        password: ''
      }
    )
  })

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

    api.getUserData = (url, state) => mockUser;
    const mockEvent = { preventDefault: () => {} }
    await renderedLogin.instance().handleSubmit(mockEvent);
    expect(api.getUserData()).toEqual({"email": "email", "name": "Jordan", "password": "password"});
    expect(mockLogin).toHaveBeenCalled();
  });

  it('should call the dispatch fn when using a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const mockUser = {name: 'Jordan', email: 'email', password: 'password'};

    mapped.logIn(mockUser);
    expect(mockDispatch).toHaveBeenCalled();
  })
});
