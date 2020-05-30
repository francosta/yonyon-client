import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/utils';
import checkPropTypes from 'check-prop-types';
import SplashScreen from './SpashScreen';

/**
 * @function setup - Factory function to create a shallow wrapper for the SplashScreen component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<SplashScreen />);
};

describe('splash screen', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders with no issues', () => {
    const component = findByTestAttr(wrapper, 'splash-screen-container');
    expect(component.length).toBe(1);
  });

  test('shows logo', () => {
    const component = findByTestAttr(wrapper, 'yonyon-logo');
    expect(component.length).toBe(1);
  });
});
