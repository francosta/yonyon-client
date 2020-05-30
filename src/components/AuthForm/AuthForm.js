import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Text, Button, Input, Image } from 'react-native-elements';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import authLogo from '../../../assets/authLogo.png';
import NavLink from '../NavLink/NavLink';
import isEmail from 'validator/lib/isEmail';

const styles = EStyleSheet.create({
  formContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
    marginTop: '25%',
    marginBottom: '5%',
    flexDirection: 'column',
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  authLogo: {
    height: '3.75rem',
    width: '3.125rem',
    alignSelf: 'center',
    marginBottom: '5.75rem',
  },
  disclaimerText: {
    color: '$primaryColorShade1',
    textAlign: 'center',
    fontSize: '$labelSize',
  },
  bold: {
    color: '$primaryColorShade1',
    fontSize: '$labelSize',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    fontSize: '$smBodySize',
    color: '$primaryColorShade1',
  },
  button: {
    backgroundColor: '$secondaryColorShade1',
    marginBottom: '0.6875rem',
    width: '11.125rem',
  },
  buttonContainer: {
    width: '15rem',
    alignItems: 'center',
  },
});

const AuthForm = (props) => {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  const validateEmail = (input) => {
    isEmail(input) && setEmail(input);
  };

  const handleSubmit = () => {};

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
          <Image source={authLogo} containerStyle={styles.authLogo} />
          <View style={styles.inputContainer}>
            {props.type === 'signup' ? (
              <Input
                placeholder="username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
                inputStyle={styles.input}
              />
            ) : null}
            <Input
              placeholder="email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              inputStyle={styles.input}
              errorStyle={{ color: 'red' }}
              errorMessage={
                props.type === 'login' && email && !isEmail(email)
                  ? 'Please enter a valid email'
                  : ''
              }
            />
            <Input
              placeholder="password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              inputStyle={styles.input}
            />
            {error ? (
              <Text style={styles.errorMessage}>
                Something went wrong. Please try again
              </Text>
            ) : null}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={props.type === 'signup' ? 'SIGN UP' : 'LOGIN'}
              onPress={() => onSubmit({ username, email, password })}
              buttonStyle={styles.button}
            />
            <NavLink
              type={props.type}
              text={
                props.type === 'signup'
                  ? 'Already have an account?'
                  : "Don't have an account?"
              }
              action={props.type === 'signup' ? 'Login' : 'Sign up'}
              setAuthForm={props.setAuthForm}
            />
          </View>
          <View style={styles.disclaimer}>
            <Text style={styles.disclaimerText}>
              By continuing, you agree to YonYon's{' '}
              <Text style={styles.bold}>Terms of Use</Text> and confirm that you
              have read YonYon's <Text style={styles.bold}>Privacy Policy</Text>
              <Text>.</Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthForm;
