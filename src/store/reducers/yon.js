import { logAnswer } from '../../helpers/analytics';

/**
 * @constant initialState - Initial auth state for the application
 */
const initialState = {
  unansweredYons: [],
  answeredYons: [],
};

/**
 * @function yonReducer - Reducer for authentication actions.
 */
export default (
  state = {
    unansweredYons: [],
    answeredYons: [],
    moquinhas: true,
  },
  action
) => {
  switch (action.type) {
    case 'GET_YONS':
      return { ...state, unansweredYons: action.payload };
    case 'ANSWER_YON': {
      const answer =
        action.payload.answers[action.payload.answers.length - 1].answer;

      logAnswer({ answer });
      const updatedAnsweredYons = [...state.answeredYons, action.payload];

      return {
        ...state,
        answeredYons: updatedAnsweredYons,
      };
    }
    case 'GET_ANSWERED_YONS': {
      return { ...state, answeredYons: action.payload };
    }
    case 'UPDATE_UNANSWERED_YONS': {
      const updatedUnansweredYons = [...state.unansweredYons].slice(1);
      return { ...state, unansweredYons: updatedUnansweredYons };
    }
    case 'LOG_OUT':
      return { initialState };
    default:
      return { unansweredYons: [], answeredYons: [] };
  }
};
