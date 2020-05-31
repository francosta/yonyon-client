/**
 * @constant initialState - Initial auth state for the application
 */
const initialState = {
  unansweredYons: [],
  selectedQuestion: null,
  questionsForUser: null,
};

/**
 * @function authReducer - Reducer for authentication actions.
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_YONS':
      return { ...state, unansweredYons: action.payload };
    default:
      return { ...state };
  }
};
