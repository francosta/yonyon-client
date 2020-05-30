import React, { useState } from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, Button, Input, Image } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import isEmail from 'validator/lib/isEmail';
import splashLogo from '../../../assets/splashLogo.png';
import NavLink from '../NavLink/NavLink';
import * as authActions from '../../store/actions/auth';

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
    height: '8.875rem',
    width: '12.8125rem',
    alignSelf: 'center',
    marginBottom: '3.75rem',
  },
  disclaimerText: {
    color: '$textColor',
    textAlign: 'center',
    fontSize: '$labelSize',
  },
  bold: {
    color: '$textColor',
    fontSize: '$labelSize',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    fontSize: '$smBodySize',
    color: '$textColor',
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
  activityLoaderContainer: {
    backgroundColor: '$secondaryColorShade1',
    marginBottom: '0.6875rem',
    width: '11.125rem',
    alignItems: 'center',
  },
});

/**
 * @function AuthForm - React functional component which renders the AuthForm in signup or login, depending on the type state variable which defaults to 'login'.
 * @returns {ReactComponentElement} - Returns the react AuthForm component
 */
const AuthForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('login');
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @function validateEmail - Function that uses the
   * @param {string} input
   */
  const validateEmail = (input) => {
    isEmail(input) && setEmail(input);
  };

  const clearInputs = () => {
    setEmail(null);
    setPassword(null);
    setPassword(null);
    setUsername(null);
  };

  /**
   * @function changeFormType - Function that is passed down to the NavLink component and sets the type state variable between 'login and 'signup'
   */
  const changeFormType = () => {
    setError(null);
    if (type === 'login') {
      setType('signup');
    } else {
      setType('login');
    }
  };

  /**
   * @function handleSubmit - Function that submits the Auth form by dispatching the actions for authActions.
   * Also manages the isLoading and error state variables.
   */
  const handleSubmit = async () => {
    let action;

    if (type === 'signup') {
      action = authActions.signup(username, email, password);
    } else {
      action = authActions.login(email, password);
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          data-test={type === 'login' ? 'form-login' : 'form-signup'}
          style={styles.formContainer}
        >
          <Image source={splashLogo} containerStyle={styles.authLogo} />
          <View style={styles.inputContainer}>
            {type === 'signup' ? (
              <View>
                <Input
                  placeholder="username"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoCorrect={false}
                  inputStyle={styles.input}
                />
              </View>
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
                email && !isEmail(email) ? 'Please enter a valid email' : ''
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
            {isLoading ? (
              <View style={styles.activityLoaderContainer}>
                <ActivityIndicator size="large" color={'$primaryColorShade1'} />
              </View>
            ) : (
              <Button
                title={type === 'signup' ? 'SIGN UP' : 'LOGIN'}
                onPress={handleSubmit}
                buttonStyle={styles.button}
              />
            )}

            <NavLink
              clearInputs={clearInputs}
              type={type}
              setAuthForm={changeFormType}
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

export default AuthForm;
