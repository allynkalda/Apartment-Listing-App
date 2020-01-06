import React from 'react';
import TestRenderer from 'react-test-renderer';
import Landing from './Landing';
import Navbar from './Navbar';
import { MockedProvider } from '@apollo/react-testing';


describe('Landing test', () => {
  let renderer = null;
  let component = null;

  beforeEach(async () => {
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <MockedProvider>
          <Landing />
        </MockedProvider>
      );
    });

    component = renderer.root;
  });

  afterEach(() => {
    renderer.unmount();
  });

  it('renders Navbar', () => {
    const nav = component.findByType(Navbar);
    expect(nav).toBeDefined();
  });

});