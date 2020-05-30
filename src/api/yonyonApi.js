import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export default axios.create({
  baseURL: 'http://a5039af9a2cc.ngrok.io',
});
