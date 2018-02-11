import React from 'react';
import { shallow, mount } from 'enzyme';
import { Signup, mapDispatchToProps } from './Signup';

//check that handle submit has been called on form submit
//should call logIn when handleSubmit called
//should reset state with an error when fetch errors
//should also change snapshot with an error

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

  it('should call handleSubmit on submit of the form', () => {
    renderedSignup = shallow(<Signup logIn={mockLogIn} />);
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: {}
          })
      });
    });

    renderedSignup.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(window.fetch).toHaveBeenCalled();
  });
});
