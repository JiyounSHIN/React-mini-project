import axios from 'axios';

const api = axios.create({
	// baseURL: 'http://13.125.247.60',
    baseURL: 'http://localhost:5001',
});
// api.defaults.headers.common['Content-Type'] = "application/json";

export const apis = {
	// user
	// signUp: (data) => api.post('/user/signup', data),
	// signIn: (data) => api.post('/user/login', data),
	// userInfo: () => api.get('/api/auth'),
	// signOut: () => api.post('/user/logout'),
	// mypage: () => api.get('/api/mypage'),


	// post
	postList: () => api.get('/postResponseDto'),	
    // postList: () => api.get('/api/posts'),	
	postDetail: (post_id) => api.get(`/api/postdetail/${post_id}`),
    postWrite: (post_data, config) => api.post('/api/post', post_data, config),
	postUpdate: (post_id, post_data, config) => api.put(`/api/post/${post_id}`, post_data, config),
	
	

	// comments
    // commentList: (post_id, comment) => api.get(`/api/comment/${post_id}`, comment),
    commentList: () => api.get(`/comment`),
	// commentWrite: (post_id, comment) => api.post(`/api/comment/${post_id}`, comment),
    commentWrite: (post_id, comment) => api.post(`/comment`, comment),
	commentUpdate: (commentId, comment) => api.put(`/api/comment/${commentId}`, comment),
	commentDelete: (commentId) => api.delete(`/api/comment/${commentId}`)
};
