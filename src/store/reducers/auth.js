import { tryLocalSignIn, login } from '../actions/auth';

const initialState = {
  user: null,
  token: null,
  errorMessage: '',
  triedLocalSignIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRIED_LOCAL_SIGN_IN':
      return { ...state, triedLocalSignIn: true };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOG_IN':
      return { ...state, token: action.payload };
    case 'LOG_OUT':
      return { ...state, token: null, triedLocalSignIn: true, user: null };
    case 'ADD_ERROR':
      return { ...state, error: 'Something went wrong. Please try again.' };
    default:
      return { ...state };
  }
};
