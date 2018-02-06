import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});

    expect(renderedApp).toMatchSnapshot();
  })
})