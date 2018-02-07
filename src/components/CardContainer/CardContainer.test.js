import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const mockFilms = [{}, {}, {}];
    const renderedCardContainer = shallow(<CardContainer films={mockFilms} />);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should correctly map the store', () => {
    const mockStore = { films: [{}, {}, {}] };
    const mapped = mapStateToProps(mockStore);

    expect(mapped.films).toEqual(mockStore.films);
  });
});
