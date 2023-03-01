import React from 'react';
import renderer from 'react-test-renderer';
import NumbersKeys from '../NumbersKeys';

it('renders Calculator correctly', () => {
  const tree = renderer.create(<NumbersKeys />);
  expect(tree).toMatchSnapshot();
});
