import { Base64 } from 'js-base64'
import accessToken from "@/utils/accessToken";

const exporting = {
    set(jwtPayload) {
        userInfo = {
            ...JSON.parse(Base64.decode(jwtPayload))
        }
    },

    get(key) {
        return userInfo[key];
    }
}

export default exporting;

let userInfo = {}
exporting.set(accessToken.get().split(".")[1]);