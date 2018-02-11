/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';
import { mockData } from '../../mockData';

describe('Card', () => {
  let renderedCard;
  const mockHandleFav = jest.fn();

  beforeEach(() => {
    renderedCard = shallow(
      <Card 
        film={mockData.mockFilmsArray[0]} 
        user={mockData.mockUser} 
        handleFavorite={mockHandleFav} 
      />
    );
  });

  it('should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });

  it('should have a default state of clicked equal to false', () => {
    expect(renderedCard.state()).toEqual({clicked: false});
  })

  it('toggleFavorite should call determineWarning if false', () => {
    renderedCard.instance().determineWarning = jest.fn();
    renderedCard.instance().toggleFavorite(mockData.mockEvent);
    expect(renderedCard.instance().determineWarning).toHaveBeenCalled();
  });

  it('toggleFavorite should set state to clicked being false, if clicked is true', () => {
    renderedCard.state().clicked = true;
    renderedCard.instance().toggleFavorite(mockData.mockEvent);
    expect(renderedCard.state().clicked).toEqual(false);
  })

  it('determineWarning should set state to clicked being true if there is no user in props', () => {
    renderedCard = shallow(
      <Card 
        film={mockData.mockFilmsArray[0]} 
        user={{}} 
        handleFavorite={mockHandleFav} 
      />
    );

    renderedCard.instance().determineWarning(mockData.mockEvent);
    expect(renderedCard.state().clicked).toEqual(true);
  })

  it('determineWarning should display a warning on cards if there is no user', () => {
    renderedCard = shallow(
      <Card 
        film={mockData.mockFilmsArray[0]} 
        user={{}} 
        handleFavorite={mockHandleFav} 
      />
    );

    expect(renderedCard).toMatchSnapshot();
  })

  it('determineWarning call handleFavorite from props if there is a user', () => {
    renderedCard.instance().determineWarning(mockData.mockEvent);
    expect(mockHandleFav).toHaveBeenCalled();
  })
});
