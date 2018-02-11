/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Main, mapStateToProps } from './Main.js';
import { mockData } from '../../mockData';

describe('Main', () => {

  it('should match the snapshot', () => {
    const renderedMain = shallow(    
      <Main       
        films={ mockData.mockFilmsArray }
        user={ mockData.mockUser }
      />
    );
    expect(renderedMain).toMatchSnapshot();
  });
});

describe('Router', ()=> {
  const main =
    <Main       
      films={ mockData.mockFilmsArray }
      user={ mockData.mockUser }
    />

  it('should display home when the exact path is /', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/' ] }>
        { main }
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  });

  it('should display login when there is a user and the path is /login', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/login' ] }>
        { main }
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display the home screen when a user visits login and is not logged in', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/login' ] }>
        <Main 
          films={ mockData.mockFilmsArray }
          user={ {} }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display sign-up when there is a user and the path is /sign-up', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/sign-up' ] }>
        { main }
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display the home screen when a user visits login and is not logged in', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/sign-up' ] }>
        <Main 
          films={ mockData.mockFilmsArray }
          user={ {} }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display sign-up when there is a user and the path is /sign-up', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/favorites' ] }>
        { main }
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot();
  })

  it('should display the home screen when a user visits login and is not logged in', () => {
    const renderedMain = shallow(
      <MemoryRouter initialEntries={ [ '/favorites' ] }>
        <Main 
          films={ mockData.mockFilmsArray }
          user={ {} }
        />
      </MemoryRouter>
    );
    expect(renderedMain).toMatchSnapshot()
});
})

describe.only('MSTP', () => {

  it('should correctly map the store', () => {
    const mockStore = {
      user: mockData.mockUser,
      films: mockData.mockFilmsArray
    };
    const mapped = mapStateToProps({ user: mockStore.user, films: mockStore.films });
    expect(mapped).toEqual(mockStore);
  });
})

