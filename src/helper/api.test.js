/* eslint-disable */
import * as api from './api';
import { shallow } from 'enzyme';
import { mockData } from '../mockData';

describe('fetchAPI', () => {
  it('should call a fetch and return a resolved promise', () => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: mockData.mockFilmsArray
          })
      });

      expect(api.fetchApi('url')).toEqual(mockFilms)
      expect(window.fetch).toHaveBeenCalled();
    });
  })

  it('should return an error if status is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        status: 400,
      })
    })
    const response = await api.fetchApi('url')
    expect(response).toEqual(Error('Bad response stats'))
    expect(window.fetch).toHaveBeenCalled()
  });
});

describe('getFilms', () => {
  it('should call a fetch and return a cleaned film object', async() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: [mockData.mockRawFilmData]
          })
      });
    });
    await api.getFilms('url');
    expect(window.fetch).toHaveBeenCalledWith('url');
  })
})

describe('cleanFilms', () => {
  it('should clean a films array', () => {
  expect(api.cleanFilms([mockData.mockRawFilmData])).toEqual([mockData.mockCleanedFilmData]);
  })
})

describe('getUserData', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          data: [{ user: mockData.mockUser }]
        })
    });
  });

  api.getUserData('url', {});
  expect(window.fetch).toHaveBeenCalled()
})

describe('sendFavorite', () => {
  it('should call post fetch with the correct params', () => {
     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        response: {}
      })
    }))

     const expectParams = [
      'http://localhost:3000/api/users/favorites/new',
      {
        method: 'POST',
        body: JSON.stringify({ }),
        "headers": {"map": {"content-type": "application/json"}}
      }
    ]

    api.sendFavorite({}, {});
    expect(window.fetch).toHaveBeenCalledWith(...expectParams);
  })
})

describe('deleteFavorite', () => {

  it('should call deleteFavorite with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        response: {}
      })
    }))

    const expectParams = [
      'http://localhost:3000/api/users/12/favorites/17',
      {
        method: 'DELETE',
        body: JSON.stringify({ id: 12, filmId: 17 }),
      }
    ]

    api.deleteFavorite({ id: 12 } , { movie_id: 17 });
    expect(window.fetch).toHaveBeenCalledWith(...expectParams);
  })
})

describe('postFetch', () => {

  it('should call with the post fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        response: {}
      })
    }))
   const expectParams = [
    'http://localhost:3000/api/users/favorites/new',
    {
      method: 'POST',
      body: JSON.stringify(mockData.mockFavoriteToStore),
      "headers": {"map": {"content-type": "application/json"}}
    }
  ]

  api.postFetch('users/favorites/new', mockData.mockFavoriteToStore, 'POST' );
  expect(window.fetch).toHaveBeenCalledWith(...expectParams);
    
  })

  it('should return an error when the status is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        status: 400,
      })
    })
    const response = await api.postFetch('url', mockData.mockFavoriteToStore, 'POST')
    expect(response).toEqual(Error('Bad response stats'))
    expect(window.fetch).toHaveBeenCalled()
  });
})