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

const NavLink = ({ text, type, action, setAuthForm, clearInputs }) => {
  return (
    <TouchableWithoutFeedback
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
      <Text style={styles.link}>
        {text} <Text style={styles.action}>{action}</Text>
      </Text>
    </TouchableWithoutFeedback>
  );
};

NavLink.propTypes = {
  routeName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
