import { AsyncStorage } from 'react-native';
import yonyonApi from '../../api/yonyonApi';

export const getUnansweredYons = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await yonyonApi.get(`/me/yons`, config);
      dispatch({ type: 'GET_YONS', payload: response.data });
    } catch (e) {
      throw new Error(e);
    }
  };
};
export const getAnsweredYons = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await yonyonApi.get(`/me/answers`, config);
      dispatch({ type: 'GET_ANSWERED_YONS', payload: response.data });
    } catch (e) {
      throw new Error(e);
    }
  };
};

export const answerYon = (yonId, answer) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await yonyonApi.patch(
        `/yons/${yonId}`,
        { answer },
        config
      );
      dispatch({ type: 'ANSWER_YON', payload: response.data });
    } catch (e) {
      throw new Error(e);
    }
  };
};

export const updateUnansweredYons = () => {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_UNANSWERED_YONS' });
  };
};
