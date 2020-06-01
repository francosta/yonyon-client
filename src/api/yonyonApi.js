import axios from 'axios';
// import { API_URL } from 'react-native-dotenv';

export default axios.create({
  baseURL: 'http://f19d7c321fa84.ngrok.io/',
});
