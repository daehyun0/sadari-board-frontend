import http from '@/api/baseAxios';

export default {
    lists () {
        return http.get('/')
    },

    detail (idx) {
        return http.get(`/product/${idx}`);
    }
}