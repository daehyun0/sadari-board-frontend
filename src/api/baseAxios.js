import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://13.124.239.157:3000'
})

axiosInstance.interceptors.response.use(function (response) {
    if (response.data.isSuccess) {
        return response;
    }

    return Promise.reject(response);
});

export default axiosInstance;