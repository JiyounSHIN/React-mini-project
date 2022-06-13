import axios from "axios";

 // 헤더 설정, 콘텐츠 타입 등.값이 들어감 
const instance = axios.create({
    headers : {"Content-Type":"application/json"},
    timeout : 5000,
});

// 요청 가로채기 !! 
// config = axios.create 에 설정들  
instance.interceptors.request.use((config)=> {
    console.log(config);
    //header 에 토큰 넣기 
    config.headers ["X-AUTH-TOKEN"] = "1234"
    // 꼭 return 넣기 !!!!!
    // 요청을 보내기 전에 요청 설정값이 오지 않아서 이슈발생 !! 

    return config;
    // 오류가 난 값을 받을 수 있음. !!! 
    // 아래는 ~ promise reject 시킴 !! 
}, (err)=> {
    return Promise.reject(err); 
});

// 응답 가로채기 !! (응답이 성공했을 때, 첫번째 인자 response 실행)
instance.interceptors.response.use((response) => {
    console.log(response)
    return response;
},(err) => {
    return Promise.reject(err);
})

export default instance;
