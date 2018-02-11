import React from 'react';
import { shallow } from 'enzyme';
import {
  CardContainer,
  mapStateToProps,
  mapDispatchToProps
} from './CardContainer';

/*eslint-disable*/
//test MDTP
//when handlefav called when user does not have film in favorites, calls handleAddFavorite
//when handlefav called when user does have film in favorites, calls handleRemoveFavorite
//handleAddFav calls addFav and sendFav
//handleRemoveFav calls removeFav and deleteFav
/*eslint-enable*/

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const mockFilms = [{}, {}, {}];
    const renderedCardContainer = shallow(<CardContainer films={mockFilms} />);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should correctly map the store', () => {
    const mockStoreUser = {
      name: 'Matt',
      email: '123@gmail.com',
      password: 'password'
    };
    const mapped = mapStateToProps({ user: mockStoreUser });

    expect(mapped.user).toEqual(mockStoreUser);
  });

  it('should call the dispatch fn when using a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const mockFilm = { title: 'The Big Lebowski' };

    mapped.addFavorite(mockFilm);
    expect(mockDispatch).toHaveBeenCalled();

    mapped.removeFavorite(mockFilm);
    expect(mockDispatch).toHaveBeenCalled();
  });

  describe('handleFavorite', () => {
    xit('should call handleAddFav if film is not in user favorites', () => {
      const mockFavorites = [{movie_id: 0}, {id: 1}, {id: 2}];
      const mockUser = { favorites: mockFavorites };
      const mockAddFav = jest.fn()
      const mockFilms = [{}, {}, {}];
      
      const renderedCardContainer = shallow(<CardContainer user={mockUser} films={mockFilms} />);

      renderedCardContainer.instance().handleFavorite(0);
      expect(mockAddFav).toHaveBeenCalled();
    });
  });
});
