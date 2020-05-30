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

  test('renders with no issues', () => {});

  test('shows logo', () => {});

  test('takes full screen', () => {});

  test('gets brand color', () => {});
});
