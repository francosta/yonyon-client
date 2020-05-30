import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
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

const NavLink = ({ buttonText, type, action, setAuthForm, clearInputs }) => {
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
        {buttonText}
        <Text data-test="action" style={styles.action}>
          {action}
        </Text>
      </Text>
    </TouchableWithoutFeedback>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  setAuthForm: PropTypes.func.isRequired,
  clearInputs: PropTypes.func.isRequired,
};

export default NavLink;
