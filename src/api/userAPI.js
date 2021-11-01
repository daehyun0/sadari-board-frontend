import axios from 'axios';
import host from '@/api/host.js';


export default {
    login () {
        return axios.get(host + '/login')
    },

    join () {
        return axios.get(host + '/join')
    }
}