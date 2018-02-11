import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';

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
});
