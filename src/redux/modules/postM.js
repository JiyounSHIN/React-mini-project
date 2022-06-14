import axios from "axios";
import { connectStorageEmulator } from "firebase/storage";
// 게시물 등록, 수정, 삭제 Redux

const CREATE = "post/POSTWRITE"

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
}

export const postWriteFB = (post) => {
    // console.log(post)
    return async function (dispatch) {
        const _postWrite = await axios.post("http://localhost:5001/post",{
            title : post.title,
            imageUrl : post.imageUrl,
            category : post.category,
            content : post.content
        }).then(response => {
            console.log(response);
        }); dispatch(postWrite(post))
    }
}


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/POSTWRITE": {
            const new_post_list = [...state.list, action.post];
            console.log(new_post_list);
            return { list: new_post_list };
        }
        default:
            return state;
    }
}

