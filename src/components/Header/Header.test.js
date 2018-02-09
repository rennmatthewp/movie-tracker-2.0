import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let renderedHeader;

  beforeEach(() => {
    const user = {name:'person'}
    const mockSignOut = jest.fn()
    renderedHeader = shallow(<Header user={user} signOut={mockSignOut}/>);
  });

  it('should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });
});
