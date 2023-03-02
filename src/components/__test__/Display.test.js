import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../Display';

it('renders DisplayScreen correctly', () => {
  const tree = renderer.create(<Display />);
  expect(tree).toMatchSnapshot();
});
