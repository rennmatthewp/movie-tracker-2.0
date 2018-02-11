import React from 'react';
import { shallow } from 'enzyme';
import  Main  from './Main';

//test router
//test MSTP

describe('Main', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<Main />);
    expect(renderedApp).toMatchSnapshot();
  });
});
