/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Signup, mapDispatchToProps } from './Signup';
import * as api from '../../helper/api';
import { mockData } from '../../mockData';

describe('Signup', () => {
  let renderedSignup;
  let mockLogIn = jest.fn();

  beforeEach(() => {
    renderedSignup = shallow(<Signup logIn={mockLogIn} />);
  });

  it('should match the snapshot', () => {
    expect(renderedSignup).toMatchSnapshot();
  });

  it('should have a default state of empty strings for name, email and password and an error key equal to false', () => {
    expect(renderedSignup.state()).toEqual(mockData.mockSignupDefaultState);
  })

  it('should call the dispach fn when using a fn from mdtp', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logIn();
    expect(mockDispatch).toHaveBeenCalled();
  });
   
  it('handleInputChange should set state with input values', () => {
    renderedSignup = mount(<Signup logIn={mockLogIn} />);

    renderedSignup
      .find('input')
      .first()
      .simulate('change', mockData.mockEvent);
    expect(renderedSignup.state()).toEqual(mockData.mockSignupExpectedState);
  });

  it('should setState with an error when the window fetch returns an error', async() => {
    renderedSignup = shallow(<Signup logIn={mockLogIn} />);

    window.fetch = jest.fn().mockImplementation(() =>  Promise.resolve({
      status: 500
      })
    )
    await renderedSignup.instance().handleSubmit( mockData.mockEvent );
    expect(window.fetch).toHaveBeenCalled();
    expect(renderedSignup.state()).toEqual({...mockData.mockSignupDefaultState, error: true})
  })

  it('should match the snapshot after an error in the fetch', () => {
    expect(renderedSignup).toMatchSnapshot();
  })

  it('should call handleSubmit on submit of the form', async () => {
    api.postFetch = ( url, stringState, method ) => ({});
    api.getUserData = (url, state) => mockData.mockUser;
    await renderedSignup.instance().handleSubmit( mockData.mockEvent );
    expect(renderedSignup.instance().props.logIn).toHaveBeenCalled();
  });
});
