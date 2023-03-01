import React from 'react';
import renderer from 'react-test-renderer';
import NumbersKeys from '../NumbersKeys';

it('renders operations correctly', () => {
  const tree = renderer.create(<NumbersKeys />);
  expect(tree).toMatchSnapshot();
});
