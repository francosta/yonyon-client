import { logCreateYon } from '../../helpers/analytics';

/**
 * @constant initialState - Initial auth state for the application
 */
export const initialState = {
  user: null,
  token: null,
  errorMessage: '',
  triedLocalSignIn: false,
};

/**
 * @function authReducer - Reducer for authentication actions.
 */
export const authReducer = (state = initialState, action) => {
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
    case 'CREATE_YON': {
      const updatedCreatedYons = [action.payload, ...state.user.createdYons];
      if (state.user.createdYons.length < 1) {
        logCreateYon({ userId: state.user._id, milestone: 1 });
      } else if (state.user.createdYons.length === 4) {
        logCreateYon({ userId: state.user._id, milestone: 5 });
      } else if (state.user.createdYons.length === 9) {
        logCreateYon({ userId: state.user._id, milestone: 10 });
      }
      const updatedUser = { ...state.user, createdYons: updatedCreatedYons };
      return {
        ...state,
        user: updatedUser,
      };
    }
    default:
      return { ...state };
  }
};
