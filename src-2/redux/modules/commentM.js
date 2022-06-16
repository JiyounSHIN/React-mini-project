import axios from "axios";
// 댓글 등록, 수정, 삭제 Redux

const CREATE = "cmt/POSTWRITE"
const UPDATE = "cmtt/POSTUPDATE"
const DELETE = "cmtt/POSTDELETE"

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


export const commentWriteAPI = (cmt) => {
    const date = new Date();
    return async function (dispatch) {
        const _postWrite = await axios.post("http://localhost:5001/comment", {
            postId: cmt.postId,
            username: cmt.username,
            comment: cmt.comment,
            createdAt: date,
        }).then(response => {
            console.log("@@@@@@@@@@@@@@@@@3");
            console.log(response.data);
        }); 
        dispatch(postWrite(cmt))
    }
}
export const commentUpdateAPI = (cmt_id) => {
    return async function (dispatch) {
        const get_cmt = await axios.get("http://localhost:5001/comment")
        .then(response => {
            console.log(response, get_cmt)
        })
        dispatch(postupdate(get_cmt))
    }
}

export const commentDeleteAPI = (cmt_id) => {
    return null;
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "cmt/POSTWRITE": {
            const new_post_list = [...state.list, action.post];
            console.log(new_post_list);
            return { list: new_post_list };
        }
        case "cmt/POSTUPDATE": {
            return {list : action.post_index}
        }
        case "cmt/POSTDELETE": {
            return {list : action.post_index}
        }
        default:
            return state;
    }
}

