/* eslint-disable no-undef, no-unused-vars */
import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import * as api from '../../helper/api';

describe('App', () => {
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
    const mockFilms = [
      { title: 'FBDO' },
      { title: 'FBDO' },
      { title: 'FBDO' },
      { title: 'FBDO' },
      { title: 'FBDO' }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: mockFilms
          })
      });
    });
    api.getFilms = () => mockFilms;
    const mockHandleFetch = jest.fn();
    const renderedApp = await shallow(<App handleFetch={mockHandleFetch} />);

    expect(mockHandleFetch).toHaveBeenCalled();
  });
});
