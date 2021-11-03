import { Base64 } from 'js-base64'
import accessToken from "@/utils/accessToken";

const UserInfo = {
    set(jwtPayload) {
        userInfo = {
            ...JSON.parse(Base64.decode(jwtPayload))
        }
    },

    get(key) {
        return userInfo[key];
    }
}

export default UserInfo;

let userInfo = {}
const token = accessToken.get();
if (token) {
    UserInfo.set(token.split(".")[1]);
}