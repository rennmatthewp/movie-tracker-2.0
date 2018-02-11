/*eslint-disable camelcase*/
import React from 'react';
import { shallow } from 'enzyme';
import * as api from '../../helper/api';
import {
  CardContainer,
  mapStateToProps,
  mapDispatchToProps
} from './CardContainer';

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
    it('should call handleAddFav with the correct args if film is not in user favorites', () => {
      const mockFavorites = [{ movie_id: 1 }, { movie_id: 2 }];
      const mockUser = { favorites: mockFavorites };
      const mockAddFav = jest.fn();
      const mockFilms = [{ movie_id: 0 }, { movie_id: 1 }, { movie_id: 2 }];

      const renderedCardContainer = shallow(
        <CardContainer
          user={mockUser}
          films={mockFilms}
          addFavorite={mockAddFav}
        />
      );

      renderedCardContainer.instance().handleAddFavorite = jest.fn();

      renderedCardContainer.instance().handleFavorite(0);
      expect(
        renderedCardContainer.instance().handleAddFavorite
      ).toHaveBeenCalledWith(0);
    });

    it('should call handleRemoveFav with the correct args if film is in user favorites', () => {
      const mockFavorites = [{ movie_id: 0 }, { movie_id: 1 }, { movie_id: 2 }];
      const mockUser = { favorites: mockFavorites };
      const mockRemoveFav = jest.fn();
      const mockFilms = [{ movie_id: 0 }, { movie_id: 1 }, { movie_id: 2 }];

      const renderedCardContainer = shallow(
        <CardContainer
          user={mockUser}
          films={mockFilms}
          removeFavorite={mockRemoveFav}
        />
      );

      renderedCardContainer.instance().handleRemoveFavorite = jest.fn();

      renderedCardContainer.instance().handleFavorite(0);
      expect(
        renderedCardContainer.instance().handleRemoveFavorite
      ).toHaveBeenCalledWith(mockFilms[0]);
    });
  });

  describe('handleAddFavorite', () => {
    it('should call addFavorite and sendFavorite with correct args', () => {
      const mockFavorites = [{ movie_id: 1 }, { movie_id: 2 }];
      const mockUser = { favorites: mockFavorites };
      const mockFilms = [{ movie_id: 0 }, { movie_id: 1 }, { movie_id: 2 }];
      const mockAddFav = jest.fn();
      api.sendFavorite = jest.fn();

      const renderedCardContainer = shallow(
        <CardContainer
          user={mockUser}
          films={mockFilms}
          addFavorite={mockAddFav}
        />
      );

      renderedCardContainer.instance().handleAddFavorite(0);
      expect(mockAddFav).toHaveBeenCalledWith(mockFilms[0]);
      expect(api.sendFavorite).toHaveBeenCalledWith(mockUser, mockFilms[0]);
    });
  });

  describe('handleRemoveFavorite', () => {
    it('should call removeFavorite and deleteFavorite with the correct args', () => {
      const mockFavorites = [{ movie_id: 1 }, { movie_id: 2 }];
      const mockUser = { favorites: mockFavorites };
      const mockRemoveFav = jest.fn();
      const mockFilms = [{ movie_id: 0 }, { movie_id: 1 }, { movie_id: 2 }];
      api.deleteFavorite = jest.fn();

      const renderedCardContainer = shallow(
        <CardContainer
          user={mockUser}
          films={mockFilms}
          removeFavorite={mockRemoveFav}
        />
      );

      renderedCardContainer.instance().handleRemoveFavorite(mockFilms[1]);
      expect(mockRemoveFav).toHaveBeenCalledWith(mockFilms[1]);
      expect(api.deleteFavorite).toHaveBeenCalledWith(mockUser, mockFilms[1]);
    });
  });
});
