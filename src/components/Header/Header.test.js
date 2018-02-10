import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { mapStateToProps, mapDispatchToProps } from './Header';

//can we test links?

describe('Header', () => {
  let renderedHeader;
  let mockSignOut

  beforeEach(() => {
    const user = {name:'person'}
    mockSignOut = jest.fn()
    renderedHeader = shallow(<Header user={user} signOut={mockSignOut}/>);
  });

  it('should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });

  it('should MSTP, taking in the store and mapping our user to that container', () => {
    const mockStore = {
      user: {
        name: 'Matt', 
        email: '123@gmail.com', 
        password: 'password'
      }
    }
    const mappedStore = mapStateToProps(mockStore)
    expect(mappedStore.user).toEqual(mockStore.user)
  })

 it('should call the dispach fn when using a fn from mdtp', () => {
  const mockDispatch = jest.fn()
  const mapped = mapDispatchToProps(mockDispatch)

  mapped.signOut()
  expect(mockDispatch).toHaveBeenCalled()
  });

  it('should call signOut on click of our button', () => {
    renderedHeader.find('#sign-out').simulate('click');

    expect(mockSignOut).toHaveBeenCalled()
  });
});
