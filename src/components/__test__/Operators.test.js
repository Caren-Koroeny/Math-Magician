import React from 'react';
import renderer from 'react-test-renderer';
import Operators from '../Operators';

it('renders operationskeys correctly', () => {
  const tree = renderer.create(<Operators />);
  expect(tree).toMatchSnapshot();
});
