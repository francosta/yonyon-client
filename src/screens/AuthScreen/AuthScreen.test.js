import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/utils';
import checkPropTypes from 'check-prop-types';
import AuthScreen from './AuthScreen';

/**
 * @function setup - Factory function to create a shallow wrapper for the AuthScreen component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<AuthScreen />);
};

describe('Auth Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('renders with no issues', () => {
    const screen = findByTestAttr(wrapper, 'auth-screen');
    expect(screen.length).toBe(1);
  });

  test('render AuthForm as child component', () => {
    const child = findByTestAttr(wrapper, 'auth-form');
    expect(child.length).toBe(1);
  });
});
