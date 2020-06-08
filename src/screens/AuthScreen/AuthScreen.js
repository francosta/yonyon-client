import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AuthForm from '../../components/AuthForm/AuthForm';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primaryColorShade1',
  },
});

/**
 * @function AuthScreen - Functional component which returns the Authentication screen
 * @return {JSXElement} - Returns react component with the AuthForm component
 */
const AuthScreen = () => {
  return (
    <View data-test="auth-screen" style={styles.screen}>
      <AuthForm data-test="auth-form" />
    </View>
  );
};

export default AuthScreen;
