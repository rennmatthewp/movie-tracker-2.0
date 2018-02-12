export const mockData = {
  mockUser: {
    name: 'TinkerBell',
    email: 'tink@gmail.com',
    password: 'password'
  },
  mockFilmsArray: [
    {
      backdrop: 'url',
      title: 'Planet Earth',
      overview: 'Best documentary ever',
      poster_path: 'url',
      release_date: 'March 5, 2006',
      vote_average: '1000%',
      movie_id: 20
    }
  ],
  mockEvent: {
    target: { 
      id: 0,
      name: 'email',
      value: 'sickemail' 
    },
    preventDefault: () => {}
  },
  mockFavoritesArray: [  
    {
      backdrop: 'url',
      title: 'Planet Earth 2',
      overview: 'Also best documentary ever',
      poster_path: 'url',
      release_date: 'September 15, 2017',
      vote_average: '1000%',
      movie_id: 21
    },    
    {
      backdrop: 'url',
      title: 'Blue Planet',
      overview: 'Awesome but not best',
      poster_path: 'url',
      release_date: 'April 4, 2007',
      vote_average: '400%',
      movie_id: 24
    }
  ],
  mockFavoritesIdOnly: [
    { movie_id: 1 }, 
    { movie_id: 2 }
  ],
  mockFilmsIdOnly: [
    { movie_id: 0 }, 
    { movie_id: 1 }, 
    { movie_id: 2 }
  ],
  loginDefaultState: {
    email: '',
    password: ''
  },
  mockSignupDefaultState: {
    name: '',
    error: false,
    password: '',
    email: ''
  },
  mockLoginExpectedState: {
    email: 'sickemail',
    password: ''
  },
  mockSignupExpectedState: {
    email: "sickemail", 
    error: false, 
    name: "", 
    password: ""
  },
  mockRawFilmData: {
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
  },
  mockCleanedFilmData: {
    backdrop: "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
    title: "The Maze Runner",
    overview: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    poster_path: "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
    release_date: "2014-09-10",
    vote_average: 7,
    movie_id: 198663
  },
  mockFavoriteToStore: {
    movie_id: 2,
    user_id: 10,
    title: '',
    poster_path: '',
    release_date: '',
    vote_average: '',
    overview: ''
  }
}

