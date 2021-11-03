import http from '@/api/baseAxios'

export default {
    add(productIdx, userIdx, contents, reviewScore) {
        return http.post(`/product/${productIdx}/review`, {
            userIdx,
            contents,
            reviewScore
        });
    },

    remove(productIdx) {
        return http.delete(`/product/${productIdx}/review`);
    }
}