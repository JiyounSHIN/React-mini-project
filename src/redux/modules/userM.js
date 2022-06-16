import axios from "axios";
// import instance from "../shared/axios";


//Action Type 지정
const CREATE = "user/SIGNUP";
const LOGIN = "user/LOGIN";
const IDCHK = "user/IDCHK";
const SIGNOUT = "user/SIGNOUT"

//초기값 지정 
const initialState = {
    list: [{
        id: "",
        username: "",
        nickname: "",
        password: "",
        passwordCheck: ""
    }]
}

// Action 생성함수 
export function signup(user) {
    console.log(user)
    return { type: CREATE, user }
}
export function login(user) {
    return { type: LOGIN, user }
}
// export function idcheck(user) {
//     return { type: IDCHK, user }
// }
// export function signout(user) {
//     return { type: SIGNOUT, user }
// }


export const signupFB = (user) => {
    // console.log(username, nickname, password)
    return async function (dispatch) {
        await axios.post("/user/signup", {
            username: user.username,
            nickname: user.nickname,
            password: user.password,
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
        dispatch(signup(user));
    };
}

export const loginFB = (user) => {
    return async function (dispatch) {
        await axios.post("/user/login", {
            username: user.username,
            password: user.password,
            // 일치여부, 로그인 인증값도 받아와야 함 // 
        }).then(response => { 
            console.log(response.data);
            dispatch(login(user));
        }).catch(error => {
            console.log(error);
            alert('로그인 성공!');
        })
    }
}

// export const idcheckFB = (username) => {
//     return async function (dispatch) {
//         axios({ method: "get", headers: {} });
//         // 토큰을 받아서 웹 저장소에 저장 
//     }
// }

// export const signoutFB = (user_id) => {
//     return async function (dispatch) {
//         //토큰 삭제 
//     }
// }


// 리듀서 
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "user/SIGNUP": {
            const new_user_list = [...state.list, action.user];
            console.log(new_user_list);
            return { list: [...state.list, action.user] }
        }
        case "user/LOGIN": {
            const login_user = [action.user]
            console.log(login_user);
            return { list: action.user }
        }
        default:
            return state;
    }
}
