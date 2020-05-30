import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  linkContainer: {
    alignItems: 'center',
  },
  link: {
    color: '$textColor',
    textAlign: 'center',
  },
  action: {
    color: '$textColor',
    textDecorationLine: 'underline',
  },
});

/**
 *
 * @function NavLink React functional component
 * @param {string} type - Type of Auth form - login or signup
 * @param {function} setAuthForm - Function which manages the type state variable, trigger the swicth between login and signup
 * @param {function} clearInputs - Function that clears the form inputs
 * @returns {ReactComponentElement} - NavLink react component which renders the conditional message and the touchable to swicth between the sign up and login form.
 */
const NavLink = ({ type, setAuthForm, clearInputs }) => {
  return (
    <TouchableWithoutFeedback
      data-test="nav-link"
      style={styles.linkContainer}
      onPress={
        type === 'signup'
          ? () => {
              clearInputs();
              setAuthForm('login');
            }
          : () => {
              clearInputs();
              setAuthForm('signup');
            }
      }
    >
      <Text data-test="nav-link-text" style={styles.link}>
        {type === 'signup'
          ? 'Already have an account? '
          : "Don't have an account? "}
        <Text data-test="action" style={styles.action}>
          {type === 'signup' ? 'Login' : 'Sign up'}
        </Text>
      </Text>
    </TouchableWithoutFeedback>
  );
};

NavLink.propTypes = {
  type: PropTypes.string.isRequired,
  setAuthForm: PropTypes.func.isRequired,
  clearInputs: PropTypes.func.isRequired,
};

export default NavLink;
