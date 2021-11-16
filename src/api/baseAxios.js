import axios from 'axios';
import AccessTokenUtils from '@/utils/accessToken'

const axiosInstance = axios.create({
    baseURL: 'https://api.sadari.click'
})

axiosInstance.interceptors.request.use(function (config) {
    const accessTokenFromLocal = AccessTokenUtils.get();
    if (accessTokenFromLocal) {
        config.headers['x-access-token'] = accessTokenFromLocal;
    }
    return config;
})

axiosInstance.interceptors.response.use(function (response) {
    if (response.data.isSuccess) {
        return response.data;
    }

    return Promise.reject(response.data);
});

export default axiosInstance;