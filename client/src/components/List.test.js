import React from 'react';
import TestRenderer from 'react-test-renderer';
import List from './List';

const array = [
  {
    "id": "5e0b88db42940b329255cc86",
    "title": "Flat in Corsega",
    "price": "1500",
    "sqm": "80",
    "bedrooms": "3",
    "bathrooms": "1",
    "image": "www.google.es"
  }
]
describe('Accounts list is empty...', () => {
  let renderer = null;
  let component = null;

  beforeEach(async () => {
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <List array={array} loading={false} error={false} />
      );
    });

    component = renderer.root;
  });

  afterEach(() => {
    renderer.unmount();
  });

  it('className main-container', () => {
    const div = component.findByType('div');
    expect(div.props.className).toBe('main-container');
  });

  it('price p tag and text should show correctly', () => {
    const para = component.findByType('p');
    expect(para.props.className).toBe('text-space');
    expect(para.props.children[0]).toBe('1500');
    expect(para.props.children[1]).toBe(' €');
  });

  it('title h3 tag and text should show correctly', () => {
    const h3 = component.findByType('h3');
    expect(h3.props.className).toBe('text-space');
    expect(h3.props.children).toBe('Flat in Corsega');
  });

  it('price p tag and text should show correctly', () => {
    const para = component.findByType('p');
    expect(para.props.className).toBe('text-space');
    expect(para.props.children[0]).toBe('1500');
    expect(para.props.children[1]).toBe(' €');
  });

  it('price p tag and text should show correctly', () => {
    const img = component.findAllByType('img')[0];
    expect(img.props.src).toBe('www.google.es');
    expect(img.props.alt).toBe('apartment');
    expect(img.props.className).toBe('image');
  });
});
