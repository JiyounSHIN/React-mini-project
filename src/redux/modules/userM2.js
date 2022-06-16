import { Axios } from "axios";

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const USERINFO = 'user/USERINFO';

const initialState = {
    userlist: [{
        username: "",
        password: "",
        is_login: false,
    }]
}

export function login(id) {
    return { type: LOGIN, id };
}
export function logOut(userInfo) {
    return { type: LOGOUT, userInfo };
}
export function userinfo(info) {
    return { type: USERINFO, info };
}

// // //미들웨어
// export const idcheck = () => {
//     return async fucntion (dispatch {
//         await 


//     })

// }

