import axios from 'axios';
// import { API_URL } from 'react-native-dotenv';

export default axios.create({
  baseURL: 'http://f19d7c321a84.ngrok.io/',
});
