import { AsyncStorage } from 'react-native';
import yonyonApi from '../../api/yonyonApi';

export const getYons = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await yonyonApi.get(`/yons`, config);
      dispatch({ type: 'GET_YONS', payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};
