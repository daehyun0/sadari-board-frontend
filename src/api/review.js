import http from '@/api/baseAxios'

export default {
    add(productIdx, contents, reviewScore) {
        return http.post(`/product/${productIdx}/review`, {
            contents,
            reviewScore
        });
    },

    remove(productIdx) {
        return http.delete(`/product/${productIdx}/review`);
    }
}