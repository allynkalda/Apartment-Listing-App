import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render with class navbar', () => {
  const renderer = TestRenderer.create(<Navbar />);
  const component = renderer.root;
  const div = component.findByType('div');
  expect(div.props.className).toBe('navbar');
});