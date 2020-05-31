/**
 * @constant initialState - Initial auth state for the application
 */
const initialState = {
  unansweredYons: [],
  answeredYons: [],
};

/**
 * @function authReducer - Reducer for authentication actions.
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_YONS':
      return { ...state, unansweredYons: action.payload };
    case 'ANSWER_YON': {
      const updatedAnsweredYons = [...state.answeredYons, action.payload];
      return { ...state, answeredYons: updatedAnsweredYons };
    }
    case 'GET_ANSWERED_YONS': {
      return { ...state, answeredYons: action.payload };
    }
    default:
      return { ...state };
  }
};
