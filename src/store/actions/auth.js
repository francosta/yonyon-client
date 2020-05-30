import { AsyncStorage } from 'react-native';
import yonyonApi from '../../api/yonyonApi';

export const tryLocalSignIn = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const user = await getUser();
      dispatch({ type: 'set_user', payload: user });
      dispatch({ type: 'signin', payload: token });
    } else {
      console.log('no user');
    }
  };
};

export const login = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await yonyonApi.post('/login', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'set_user', payload: response.data.user });
      dispatch({
        type: 'signin',
        payload: response.data.token,
      });
      RootNavigation.navigate('MainFlow', { screen: 'Feed' });
    } catch (e) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in.',
      });
    }
  };
};
