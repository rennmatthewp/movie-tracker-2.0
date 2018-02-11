import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

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

  xit('should call handleInputChange onChange of the inputs', () => {});

  xit('handleInputChange should set state with input values', () => {});


  xit('should call handleSubmit on submit of the form', () => {});
});
