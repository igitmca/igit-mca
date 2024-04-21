
import store from '@/state';
import { showSnackbar } from '@/state/Toast/control';
import axios, { AxiosError } from 'axios';
import { isDevelopment } from '../functions';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

const errorHandler = (err: AxiosError) => {
    const error = (err.response?.data as any)?.error || err?.message || 'Something went wrong';
    console.error(error);
    store.dispatch(showSnackbar({ title: error, status: 'error' }))
    throw err;
};
axiosInstance.interceptors.response.use(
    (response) => {
        if (isDevelopment) console.info(response.config.url, '===>', response?.data)
        if (response.data.status === true) return response.data
        const err = new Error(response?.data?.error)
        throw err
    }, errorHandler)

export default axiosInstance