/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import * as api from '../../helper/api';
import { mockData } from '../../mockData';
import LocalStorageMock from '../../mockData';

describe('Login', () => {
  window.localStorage = new LocalStorageMock;
  
  it('should match the snapshot', () => {
  const renderedLogin = shallow(<Login />);

    expect(renderedLogin).toMatchSnapshot();
  });

  it('should start with a default state of empty strings for email and password', () => {
    const renderedLogin = shallow(<Login />);

    expect(renderedLogin.state()).toEqual(mockData.loginDefaultState)
  });

  it('should set state with input values on a change event', () => {
    const renderedLogin = shallow(<Login />)

    renderedLogin.instance().handleChange(mockData.mockEvent)
    renderedLogin.update();

    expect(renderedLogin.state()).toEqual(mockData.mockLoginExpectedState)
  });

  it('should call handleSubmit on submit of the form', async () => {
    const mockLogin = jest.fn();
    const renderedLogin = shallow(<Login logIn={mockLogin}/>)

    api.getUserData = (url, state) => mockData.mockUser;
    const mockEvent = { preventDefault: () => {} }
    await renderedLogin.instance().handleSubmit(mockEvent);
    expect(api.getUserData()).toEqual(mockData.mockUser);
    expect(mockLogin).toHaveBeenCalled();
  });

  it('should call the dispatch fn when using a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.logIn(mockData.mockUser);
    expect(mockDispatch).toHaveBeenCalled();
  })
});
