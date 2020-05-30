import { tryLocalSignIn, login } from '../actions/auth';

const initialState = {
  user: null,
  token: null,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action);
      return { ...state };
    default:
      return { ...state };
  }
};
