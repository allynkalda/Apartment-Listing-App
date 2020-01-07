import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const clickHandler = jest.fn();

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

it('should render button and show correct icon onclick', () => {
  const renderer = TestRenderer.create(<Navbar clickHandler={clickHandler} />);
  const component = renderer.root;
  const button = component.findByType(Button);
  const arrowUp = component.findByType(ArrowDropUpIcon);
  expect(button).toBeDefined();
  expect(arrowUp).toBeDefined();
  button.props.onClick();
  expect(clickHandler).toHaveBeenCalled();
  const arrowDown = component.findByType(ArrowDropDownIcon);
  expect(arrowDown).toBeDefined();
});

