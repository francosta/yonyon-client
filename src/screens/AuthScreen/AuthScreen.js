import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm/AuthForm';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AuthScreen = (props) => {
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
