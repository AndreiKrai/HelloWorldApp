import axios, { AxiosInstance } from 'axios';
// Create an Axios instance
const pixabayClient: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_PIXABAY_URL,
  params: {
    key: process.env.EXPO_PUBLIC_PIXABAY_API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export default pixabayClient;



