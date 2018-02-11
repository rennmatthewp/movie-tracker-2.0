/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { mockData } from '../../mockData';

describe('Header', () => {
  let renderedHeader;
  let mockSignOut;

  beforeEach(() => {
    mockSignOut = jest.fn();
    renderedHeader = shallow(
      <Header 
        user={mockData.mockUser} 
        signOut={mockSignOut} 
      />
    );
  });

  it('should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });

  it('should MSTP, taking in the store and mapping our user to that container', () => {

    const mappedStore = mapStateToProps({ user: mockData.mockUser });
    expect(mappedStore.user).toEqual(mockData.mockUser);
  });

  it('should call the dispach fn when using a fn from mdtp', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.signOut();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call signOut on click of our button', () => {
    renderedHeader.find('#sign-out').simulate('click');

    expect(mockSignOut).toHaveBeenCalled();
  });
});
