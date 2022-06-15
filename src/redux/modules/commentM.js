import axios from "axios";
// 댓글 등록, 수정, 삭제 Redux

const CREATE = "post/POSTWRITE"
const UPDATE = "post/POSTUPDATE"
const DELETE = "post/POSTDELETE"

const initialState = {
    list: [{
        "comment": "여행가고 싶다",
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
        const _postWrite = await axios.post("http://localhost:5001/post", {
            title: post.title,
            imageUrl: post.imageUrl,
            category: post.category,
            content: post.content
        }).then(response => {
            console.log(response);
        }); dispatch(postWrite(post))
    }
}
export const postUpdateAPI = (post_id) => {
    return async function (dispatch) {
        const get_post = await axios.get("http://localhost:5001/post")
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

