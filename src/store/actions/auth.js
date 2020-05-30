import { AsyncStorage } from 'react-native';
import yonyonApi from '../../api/yonyonApi';

/**
 * @function getUser() - Internal function that makes a call to the API to get a user object in return of a JWT token
 * @param {JWT-TOKEN} token - JWT token to exchange with the server
 * @returns {object}
 */
const getUser = async (token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await yonyonApi.get(`/me`, config);
  return response.data;
};

/**
 * @function tryLocalSignIn - Action which checks if the device has a JWT token in it and dispatches auth actions accordingly to change state.
 */
export const tryLocalSignIn = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const user = await getUser(token);
      dispatch({ type: 'SET_USER', payload: user });
      dispatch({ type: 'LOG_IN', payload: token });
    } else {
      dispatch({ type: 'SET_TRIED_LOCAL_SIGN_IN' });
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await yonyonApi.post('/login', { email, password });
      console.log(response);
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SET_USER', payload: response.data.user });
      dispatch({
        type: 'LOG_IN',
        payload: response.data.token,
      });
    } catch (e) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in.',
      });
    }
  };
};

export const signup = (dispatch) => {
  return async ({ username, email, password }) => {
    try {
      const response = await yonyonApi.post('/users', {
        username,
        email,
        password,
      });
      await AsyncStorage.setItem('token', response.data.token); // Store the token
      dispatch({ type: 'LOG_IN', payload: response.data.token }); // Dispatch signup action to update state
      dispatch({ type: 'SET_USER', payload: response.data.user });
    } catch (e) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong. Please try again.',
      });
    }
  };
};
