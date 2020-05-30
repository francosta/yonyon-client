import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/utils';
import checkPropTypes from 'check-prop-types';
import AuthForm from './AuthForm';

const defaultProps = { type: 'login' };

/**
 * @function setup - Factory function to create a shallow wrapper for the AuthForm component
 * @param {object} - Component props sepecific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<AuthForm {...defaultProps} />);
};

describe('user has account', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('shows login form', () => {
    const component = findByTestAttr(wrapper, 'auth-form-login');
    expect(component.length).toBe(1);
  });

  test("doesn't submit form without all required inputs", () => {});

  test('shows error messages for non-existent required inputs', () => {});

  test('runs validation on email', () => {});

  test('presses the login button and logs in', () => {});

  test('can navigate to the sign up screen', () => {});
});

describe('user has no account', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders with no issues', () => {});

  test('shows sign up form', () => {});
});
