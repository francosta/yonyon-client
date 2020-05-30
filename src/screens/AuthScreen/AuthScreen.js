import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm/AuthForm';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primaryColorShade1',
  },
});

const AuthScreen = () => {
  const [authForm, setAuthForm] = useState('signup');

  return (
    <View data-test="auth-screen" style={styles.screen}>
      <AuthForm
        data-test="auth-form"
        type={authForm}
        setAuthForm={setAuthForm}
      />
    </View>
  );
};

export default AuthScreen;
