import axios from 'axios';
// import { API_URL } from 'react-native-dotenv';

export default axios.create({
  baseURL: 'http://5ce39386ffcd.ngrok.io',
});
