import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import * as api from '../../helper/api';

describe('App', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />, { disableLifecycleMethods: true });

    expect(renderedApp).toMatchSnapshot();
  });

  it('should call handleFetch in componentDidMount', async () => {
    const mockFilms = [{}, {}, {}, {}, {}];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            mockFilms
          })
      });
    });
    api.fetchApi = () => mockFilms;
    const mockHandleFetch = jest.fn();
    const renderedApp = await shallow(<App handleFetch={mockHandleFetch} />);

    expect(mockHandleFetch).toHaveBeenCalled();
  });
});
