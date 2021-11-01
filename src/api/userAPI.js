import http from '@/api/baseAxios.js';

export default {
    login(email, password) {
        return http.post('/login', {
            userEmail: email,
            userPassword: password
        })
    },

    join(email, password, name, phoneNum) {
        return http.post('/login/join', {
            userEmail: email,
            userPassword: password,
            userName: name,
            userPhone: phoneNum
        })
    }
}