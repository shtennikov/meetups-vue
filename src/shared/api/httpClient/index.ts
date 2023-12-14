import Axios from 'axios';

export const httpClient = Axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    // withCredentials: true,
    validateStatus: (status) => ![401, 403, 405, 408, 429].includes(status) && status < 500,
});

// httpClient.interceptors.response.use(
//     (res) => (res.data),
//     (error: AxiosError) => Promise.reject(error),
// );
