import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Main, mapStateToProps } from './Main.js';

describe('Main', () => {
  it('should match the snapshot', () => {
    const renderedMain = shallow(
      <Main       
        films={ [{}, {}, {}] }
        user={ { name: 'TANIS', favorites: [{}, {}] } }
      />
    );
    expect(renderedMain).toMatchSnapshot();
  });
});


describe('Router', ()=> {

  it('should display home when the exact path is /', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ { name: 'TANIS', favorites: [{}, {}] } }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  });

  it('should display login when there is a user and the path is /login', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/login' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ { name: 'TANIS', favorites: [{}, {}] } }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display the home screen when a user visits login and is not logged in', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/login' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ {} }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display sign-up when there is a user and the path is /sign-up', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/sign-up' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ { name: 'TANIS', favorites: [{}, {}] } }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display the home screen when a user visits login and is not logged in', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/sign-up' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ {} }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display sign-up when there is a user and the path is /sign-up', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/favorites' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ { name: 'TANIS', favorites: [{}, {}] } }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display the home screen when a user visits login and is not logged in', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/favorites' ] }>
        <Main 
          films={ [{}, {}, {}] }
          user={ {} }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot()
});
})

describe('MSTP', () => {

  it('should correctly map the store', () => {
    const mockStore = {
      user: {
        name: 'Matt',
        email: '123@gmail.com',
        password: 'password'
      },
      films: [{}, {}, {}]
    };
    const mapped = mapStateToProps({ user: mockStore.user, films: mockStore.films });
    expect(mapped).toEqual(mockStore);
  });
})

