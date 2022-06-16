import axios from "axios";
import { apis } from "../../api/index";
import { commentWriteAxios } from "./comment";

//Action Type
const CREATE = "post/CREATE";
const LOAD = "post/LOAD";
const LOADCONTENT = "post/LOADCONTENT";
const DELETE = "post/DELETE";
const UPDATE = "post/UPDATE";
const LOAD_LIST = "post/LOAD_LIST";
const LOAD_SINGLE = "post/LOAD_SINGLE";

//comment
const CREATE_COMMENT = "comment/CREATE";
const DELETE_COMMENT = "comment/DELETE";
const UPDATE_COMMENT = "comment/UPDATE";


const initialState = {
	list: [
		{
			title: "여행 가고 싶어요",
			category: "일상",
			imageUrl: "",
			content: "하하하",
		},
	],
	post: [],
};

//Action creator
// post
export const postWrite = (data) => {
	return { type: CREATE, data };
};

export const postUpdate = (post_id) => {
	return { type: UPDATE, post_id };
};

export const postDelete = (post_id) => {
	return { type: DELETE, post_id };
};

//???
export const loadContent = (postid) => {
	return { type: LOADCONTENT, postid };
};

export const loadHaedal = (data) => {
	return { type: LOAD, data };
};

export const loadPostsList = (posts) => {
	return { type: LOAD_LIST, posts };
};

export const loadPost = (post_data) => {
	return { type: LOAD_SINGLE, post_data}
}

// comment
export const commentWrite = (new_comment) => {
	return {type: CREATE_COMMENT, new_comment};
}

export const commentDelete = (new_comments) => {
	return {type: DELETE_COMMENT, new_comments}
}

export const commentUpdate = (new_comments) => {
	return {type: UPDATE_COMMENT, new_comments}
}

// Middlewares
export const loadPostsListAxios = () => { // 전체 게시글 리스트 불러오기
	return async (dispatch) => {
		await apis.postList().then((res) => {
				console.log(res, 'main page posts list response');
				const post_list = res.data;
				dispatch(loadPostsList(post_list));
                console.log('---------------');
                console.log(loadPostsList(post_list).posts);
				
			})
			.catch((err) => {
				console.error(err, 'main page posts list error');
			});
	};
};

export const loadPostAxios = (post_id) => { // 조회할 게시글 불러오기
	return async (dispatch) => {
		await apis.postDetail(post_id).then(
			res => { 
				console.log(res, 'detail page response')
				const post_data = res.data;
				dispatch(loadPost(post_data));
			}
		).catch(
			err => {
				console.log(err, 'detail page error');
			}
		)
	}
}

export const writePost = (post_data) => {
	return async () => {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		console.log(post_data, config);
		await apis.postWrite(post_data, config).then(
			res => {
				console.log(res, 'post create response')
			}
		).catch(
			err => {
				console.error(err, 'post create error');
			}
		)
	}
}

export const updatePostAxios = (post_id, post_data) => { // 게시글 수정
	return async () => {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		await apis.postUpdate(post_id, post_data, config).then(
			res => {
				console.log(res, 'post update response')
			}
		).catch(
			err => {
				console.error(err, 'post update error');
			}
		)
	}
}

export const writeCommentAxios = (post_id, comment) => {
	return async (dispatch, useState) => {
			apis.commentWrite(post_id, {comment}).then(
					res => {
						console.log(res);
						const new_comment = {comment: comment, commentId: res.data.id, nickname: "nickname"};
						dispatch(commentWrite(new_comment));
					}
			).catch(
					err => {
							console.error(err);
					}
			)
	}
}



//Reducer
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		//todo: text 업로드
		case "post/CREATE": {
			const new_content = [...state.list, action.data];
			return { list: new_content, post: [] };
		}
		//todo: postid 저장
		case "post/LOADCONTENT": {
			const _post = state.list.filter((v) => {
				return v.id === action.postid;
			});

			return { list: state.list, post: _post };
		}
		// 게시글 list 불러오기
		case "post/LOAD_LIST": {
			const posts = [...action.posts];
			return { list: posts, post: [] };
		}
		case "post/LOAD_SINGLE": {
			const post_data = [action.post_data];
			return { list: state.list, post: post_data};
		}

		// 코멘트 추가
		case "comment/CREATE": {
			const new_comment = action.new_comment;
			const new_comments = [...state.post[0].comments];
			new_comments.push(new_comment);
			// console.log(action.new_comment, new_comments)
			return {list: state.list, post: [{...state.post, comments: new_comments}]};
		}

		default:
			return state;
	}
}

