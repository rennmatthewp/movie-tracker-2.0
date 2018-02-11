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
}

