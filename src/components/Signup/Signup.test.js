import React from 'react';
import { shallow, mount } from 'enzyme';
import { Signup, mapDispatchToProps } from './Signup';
import * as api from '../../helper/api';

describe('Signup', () => {
  let renderedSignup;
  let mockLogIn = jest.fn();

  beforeEach(() => {
    renderedSignup = shallow(<Signup logIn={mockLogIn} />);
  });

  it('should match the snapshot', () => {
    expect(renderedSignup).toMatchSnapshot();
  });

  it('should call the dispach fn when using a fn from mdtp', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logIn();
    expect(mockDispatch).toHaveBeenCalled();
  });
   
  it('handleInputChange should set state with input values', () => {
    renderedSignup = mount(<Signup logIn={mockLogIn} />);
    let mockEvent = {
      target: {
        name: 'name',
        value: 'ILOVEPLANTS'
      }
    };
    let expectedState = {
      name: 'ILOVEPLANTS',
      password: '',
      email: '',
      error: false
    };

    renderedSignup
      .find('input')
      .first()
      .simulate('change', mockEvent);
    expect(renderedSignup.state()).toEqual(expectedState);
  });

  it('should setState with an error when the window fetch returns an error', async() => {
    renderedSignup = shallow(<Signup logIn={mockLogIn} />);
    const mockEvent = { preventDefault: () => {} }

    window.fetch = jest.fn().mockImplementation(() =>  Promise.resolve({
      status: 500
      })
    )
    await renderedSignup.instance().handleSubmit( mockEvent );
    expect(window.fetch).toHaveBeenCalled();
    expect(renderedSignup.state()).toEqual({
        name: '',
        error: true,
        password: '',
        email: ''
      })
  })

  it('should match the snapshot after an error in the fetch', () => {
    expect(renderedSignup).toMatchSnapshot();
  })

  it('should call handleSubmit on submit of the form', async () => {
    const mockEvent = { preventDefault: () => {} }
    const mockUser = {name: 'Jordan', email: 'email', password: 'password'}
    api.postFetch = ( url, stringState, method ) => ({});
    api.getUserData = (url, state) => mockUser;
    await renderedSignup.instance().handleSubmit( mockEvent );
    expect(renderedSignup.instance().props.logIn).toHaveBeenCalled();
  });
});
