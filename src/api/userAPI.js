import http from '@/api/baseAxios.js';

export default {
    login() {
        return http.get('/login')
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