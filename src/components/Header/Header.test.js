import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let renderedHeader;

  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });

  it('should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });
});
