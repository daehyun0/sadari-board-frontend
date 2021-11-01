import axios from 'axios';

export default {
    login () {
        return axios.get('http://localhost:3000/login/')
    }
}