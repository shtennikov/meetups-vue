import Axios from 'axios';

export const httpClient = Axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

// httpClient.interceptors.response.use(
//     (res) => (res.data),
//     (error: AxiosError) => Promise.reject(error),
// );
