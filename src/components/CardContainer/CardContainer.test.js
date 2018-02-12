/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps, mapDispatchToProps } from './CardContainer';
import * as api from '../../helper/api';
import { mockData } from '../../mockData';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const renderedCardContainer = shallow(<CardContainer films={mockData.mockFilmsArray} />);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should correctly map the store', () => {
    const mapped = mapStateToProps({ user: mockData.mockUser });

    expect(mapped.user).toEqual(mockData.mockUser);
  });

  it('should call the dispatch fn when using a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.addFavorite(mockData.mockFilmsArray[0]);
    expect(mockDispatch).toHaveBeenCalled();

    mapped.removeFavorite(mockData.mockFilmsArray[0]);
    expect(mockDispatch).toHaveBeenCalled();
  });

  describe('handleFavorite', () => {
    it('should call handleAddFav with the correct args if film is not in user favorites', () => {
      const mockUser = { favorites: mockData.mockFavoritesIdOnly };
      const mockAddFav = jest.fn();

      const renderedCardContainer = shallow(
        <CardContainer
          user={ mockUser }
          films={ mockData.mockFilmsIdOnly }
          addFavorite={ mockAddFav }
        />
      );

      renderedCardContainer.instance().handleAddFavorite = jest.fn();

      renderedCardContainer.instance().handleFavorite(0);
      expect(
        renderedCardContainer.instance().handleAddFavorite
      ).toHaveBeenCalledWith(0);
    });

    it('should call handleRemoveFav with the correct args if film is in user favorites', () => {
      const mockUser = { favorites: mockData.mockFilmsIdOnly };
      const mockRemoveFav = jest.fn();

      const renderedCardContainer = shallow(
        <CardContainer
          user={ mockUser }
          films={ mockData.mockFilmsIdOnly }
          removeFavorite={ mockRemoveFav }
        />
      );

      renderedCardContainer.instance().handleRemoveFavorite = jest.fn();

      renderedCardContainer.instance().handleFavorite(0);
      expect(
        renderedCardContainer.instance().handleRemoveFavorite
      ).toHaveBeenCalledWith(mockData.mockFilmsIdOnly[0]);
    });
  });

  describe('handleAddFavorite', () => {
    it('should call addFavorite and sendFavorite with correct args', () => {
      const mockUser = { favorites: mockData.mockFavoritesIdOnly };
      const mockAddFav = jest.fn();
      api.sendFavorite = jest.fn();

      const renderedCardContainer = shallow(
        <CardContainer
          user={mockUser}
          films={mockData.mockFilmsIdOnly}
          addFavorite={mockAddFav}
        />
      );

      renderedCardContainer.instance().handleAddFavorite(0);
      expect(mockAddFav).toHaveBeenCalledWith(mockData.mockFilmsIdOnly[0]);
      expect(api.sendFavorite).toHaveBeenCalledWith(mockUser, mockData.mockFilmsIdOnly[0]);
    });
  });

  describe('handleRemoveFavorite', () => {
    it('should call removeFavorite and deleteFavorite with the correct args', () => {
      const mockUser = { favorites: mockData.mockFavoritesIdOnly };
      const mockRemoveFav = jest.fn();
      api.deleteFavorite = jest.fn();

      const renderedCardContainer = shallow(
        <CardContainer
          user={mockUser}
          films={mockData.mockFilmsIdOnly}
          removeFavorite={mockRemoveFav}
        />
      );

      renderedCardContainer.instance().handleRemoveFavorite(mockData.mockFilmsIdOnly[1]);
      expect(mockRemoveFav).toHaveBeenCalledWith(mockData.mockFilmsIdOnly[1]);
      expect(api.deleteFavorite).toHaveBeenCalledWith(mockUser, mockData.mockFilmsIdOnly[1]);
    });
  });
});
