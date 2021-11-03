export default {
    set(accessToken) {
        localStorage.setItem("accessToken", accessToken);
    },

    get() {
        return localStorage.getItem("accessToken");
    }
}