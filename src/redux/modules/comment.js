import { apis } from "../../api/index";

//Action
const CREATE = "comment/CREATE";
const UPDATE = "commentt/POSTUPDATE"
const DELETE = "commentt/POSTDELETE"

const initialState = {
    comments: [],
    comment: []
}


//Action creators
export const commentWrite = (comment) => {
    return {type: CREATE, comment};
}
export const commentUpdate = (comment_id) => {
    return { type: UPDATE, comment_id};
}
export const commentDelete = (comment_id) => {
    return { type: DELETE, comment_id};
}


//Middlewares
export const commentWriteAxios = (post_id, comment) => {
    return async (dispatch) => {
        apis.commentWrite(post_id, comment).then(
            res => {
                console.log(res.data);
            }
        ).catch(
            err => {
                console.error(err);
            }
        )
    }
}



//Reducer
export default function reducer(state = initialState, action ={}) {
    switch(action.type) {
        case "comment/CREATE": {
            const new_post_list = [...state.list, action.post];
            console.log(new_post_list);
            return { list: new_post_list };
        }
  
            default: return state;
        }
    }
