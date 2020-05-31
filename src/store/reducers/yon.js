/**
 * @constant initialState - Initial auth state for the application
 */
const initialState = {
  yons: [],
  selectedQuestion: null,
  questionsForUser: null,
};

/**
 * @function authReducer - Reducer for authentication actions.
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_YONS':
      return { ...state, yons: action.payload };
    default:
      return { ...state };
  }
};
