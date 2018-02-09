import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {
  it('should match the snapshot', () => {
    const renderedLogin = shallow(<Login />);

    expect(renderedLogin).toMatchSnapshot();
  });

  xit('should call handleInputChange onChange of the inputs', () => {});

  xit('handleInputChange should set state with input values', () => {})

  xit('should call handleSubmit on submit of the form', () => {});
});
