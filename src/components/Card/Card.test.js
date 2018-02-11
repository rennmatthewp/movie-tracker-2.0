import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

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
