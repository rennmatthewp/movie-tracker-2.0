import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

//toggle favorite called on button click
//toggle favorite calls determine warning if clicked is false
//toggle favorite chnanges state if clicked is true
//when detemrine warning is called and props.user.name does not exist, set state to true
//when determine warning is called and props.user.name is true, calls handle favorite
//state defaults to clicked: false on load

describe('Card', () => {
  let renderedCard;
  beforeEach(() => {
    const mockFilm = {
      poster: '',
      title: '',
      overview: '',
      date: '',
      rating: 5,
      id: 1
    };

    renderedCard = shallow(<Card film={mockFilm} />);
  });

  it('should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });

  //eslint-disable-next-line max-len
  xit('should call toggleFavorite on click with the targeted film object', () => {});

  xit('should change UI to indicate its favorite status', () => {
    expect(renderedCard).toMatchSnapshot();
    //call toggleFavorite
    //expect(renderedCard).toMatchSnapshot();
  });
});
