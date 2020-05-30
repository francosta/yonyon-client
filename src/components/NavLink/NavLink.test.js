import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/utils';
import checkPropTypes from 'check-prop-types';
import NavLink from './NavLink';

const defaultProps = {
  type: 'login',
  buttonText: 'This is the text to render',
  action: 'Login',
  setAuthForm: () => {},
  clearInputs: () => {},
};
/**
 * @function setup - Factory function to create a shallow wrapper for the NavLink component
 * @param {object} - Component props sepecific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NavLink {...setupProps} />);
};

describe('Navlink', () => {
  test('renders without issues', () => {});

  test('displays the message passed from the parent component', () => {});

  test('changes the type when the button is clicked', () => {
    // const mockSetAuthFormState = jest.fn();
    // React.useState = jest.fn(() => ['login', mockSetAuthFormState]);
    // const component = findByTestAttr(wrapper, 'action');
    // console.log(wrapper.debug());
    // component.simulate('click');
  });

  test('does not throw a warning with expected props', () => {});
});
