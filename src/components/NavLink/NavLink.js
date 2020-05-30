import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  linkContainer: {
    alignItems: 'center',
  },
  link: {
    color: '$primaryColorShade1',
    textAlign: 'center',
  },
  action: {
    color: '$primaryColorShade1',
    textDecorationLine: 'underline',
  },
});

const NavLink = ({ text, type, action, setAuthForm }) => {
  return (
    <TouchableOpacity
      style={styles.linkContainer}
      onPress={
        type === 'signup'
          ? () => setAuthForm('login')
          : () => setAuthForm('signup')
      }
    >
      <Text style={styles.link}>
        {text} <Text style={styles.action}>{action}</Text>
      </Text>
    </TouchableOpacity>
  );
};

NavLink.propTypes = {
  routeName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
