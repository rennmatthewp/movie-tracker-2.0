import * as api from './api';
import { shallow } from 'enzyme';

describe('fetchAPI', () => {
  it('should call a fetch and return a resolved promise', () => {
    const mockFilms = [      
      { title: 'FBDO' },
      { title: 'FBDO' },
      { title: 'FBDO' },
      { title: 'FBDO' },
      { title: 'FBDO' }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: mockFilms
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
    const mockFilms =     
    [
      {
        "vote_count": 6793,
        "id": 198663,
        "video": false,
        "vote_average": 7,
        "title": "The Maze Runner",
        "popularity": 535.445142,
        "poster_path": "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
        "original_language": "en",
        "original_title": "The Maze Runner",
        "genre_ids": [
        28,
        9648,
        878,
        53
        ],
        "backdrop_path": "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
        "adult": false,
        "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        "release_date": "2014-09-10"
      }
    ]

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
    await api.getFilms('url');
    expect(window.fetch).toHaveBeenCalledWith('url');
  })
})

describe('cleanFilms', () => {
  it('should clean a films array', () => {

  const mockFilms =     
    [
      {
        "vote_count": 6793,
        "id": 198663,
        "video": false,
        "vote_average": 7,
        "title": "The Maze Runner",
        "popularity": 535.445142,
        "poster_path": "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
        "original_language": "en",
        "original_title": "The Maze Runner",
        "genre_ids": [
        28,
        9648,
        878,
        53
        ],
        "backdrop_path": "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
        "adult": false,
        "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        "release_date": "2014-09-10"
      }
    ]
  const cleanedFilms = [
    {
      backdrop: "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
      title: "The Maze Runner",
      overview: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
      poster_path: "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
      release_date: "2014-09-10",
      vote_average: 7,
      movie_id: 198663
    }
  ]
  expect(api.cleanFilms(mockFilms)).toEqual(cleanedFilms);
  })
})

describe('getUserData', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          data: [
            { 
              user: {
                id: 12,
                name: 'Matt',
                email: '123@gmail.com',
                password: 'password' 
              }
            }
          ]
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
    const mockUser = {
                id: 12
              }
    const mockFilm = {
      movie_id: 17
    }
    const mockFilmToDelete = {
      id: 12,
      filmId: 17
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        response: {}
      })
    }))

     const expectParams = [
      'http://localhost:3000/api/users/12/favorites/17',
      {
        method: 'DELETE',
        body: JSON.stringify(mockFilmToDelete),
      }
    ]

    api.deleteFavorite(mockUser, mockFilm);
    expect(window.fetch).toHaveBeenCalledWith(...expectParams);
  })
})

describe('postFetch', () => {
  const mockFavoriteToStore = {
    movie_id: 2,
    user_id: 10,
    title: '',
    poster_path: '',
    release_date: '',
    vote_average: '',
    overview: ''
  }

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
      body: JSON.stringify(mockFavoriteToStore),
      "headers": {"map": {"content-type": "application/json"}}
    }
  ]

  api.postFetch('users/favorites/new', mockFavoriteToStore, 'POST' );
  expect(window.fetch).toHaveBeenCalledWith(...expectParams);
    
  })

  it('should return an error when the status is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        status: 400,
      })
    })
    const response = await api.postFetch('url', mockFavoriteToStore, 'POST')
    expect(response).toEqual(Error('Bad response stats'))
    expect(window.fetch).toHaveBeenCalled()
  });
})