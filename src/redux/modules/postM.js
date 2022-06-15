import axios from "axios";
import { connectStorageEmulator } from "firebase/storage";
import Postupdate from "../../page/postupdate";
// 게시물 등록, 수정, 삭제 Redux

const CREATE = "post/POSTWRITE"
const UPDATE = "post/POSTUPDATE"
const DELETE = "post/POSTDELETE"

const initialState = {
    list: [{
        "title": "여행가고 싶다",
        "imageUrl": " ",
        "category": "일상",
        "content": "강아지랑 놀러왔어요"
    }]
}

export function postWrite(post) {
    return { type: CREATE, post }
};
export function postupdate(post_index) {
    return { type: UPDATE, post_index }
};
export function postdelete(post_index) {
    return { type: DELETE, post_index }
};


export const postWriteAPI = (post) => {
    console.log(post)
    return async function (dispatch) {
        const _postWrite = await axios.post("http://13.125.247.60/api/post", {
            title: post.title,
            imageUrl: post.imageUrl,
            category: post.category,
            content: post.content
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        }); dispatch(postWrite(post))
    }
}

export const postUpdateAPI = (post_id) => {
    return async function (dispatch) {
        const get_post = await axios.get("/api/post")
        .then(response => {
            console.log(response, get_post)
        })
        dispatch(postupdate(get_post))
    }
}
export const postDeleteAPI = (post_id) => {
    return null;
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/POSTWRITE": {
            const new_post_list = [...state.list, action.post];
            console.log(new_post_list);
            return { list: new_post_list };
        }
        case "post/POSTUPDATE": {
            return {list : action.post_index}
        }
        case "post/POSTDELETE": {
            return {list : action.post_index}
        }
        default:
            return state;
    }
}

