/* eslint-disable */
import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import * as api from '../../helper/api';
import { mockData } from '../../mockData';
import LocalStorageMock from '../../mockData';

describe('App', () => {
  window.localStorage = new LocalStorageMock;

  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />, { disableLifecycleMethods: true });

    expect(renderedApp).toMatchSnapshot();
  });

  it('should call the dispatch fn when using a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.handleFetch();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call handleFetch in CDM', async () => {
    api.getFilms = () => mockData.mockFilmsArray;
    const mockHandleFetch = jest.fn();
    const renderedApp = await shallow(<App handleFetch={mockHandleFetch} />);

    expect(mockHandleFetch).toHaveBeenCalled();
  });
});
