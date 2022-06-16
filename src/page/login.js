import React from "react";
import '.././App.css';
import styled, { keyframes } from "styled-components";
import logo1 from '.././elements/images/logo_1.png';
import catimg from '.././elements/images/cat_img.png';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFB } from "../redux/modules/userM";
import axios from "axios";


const LogIn = () => {
    const name_ref = React.useRef("");
    const pw_ref = React.useRef("");
    const [idchk, setIdchk] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // React.useEffect(async () => {
    //     await axios.get('/user/idCheck/').then(res => {
    //         setIdchk((res) => {
    //             console.log(res);
    //         }
    //     )}).catch(err => {
    //         console.log("에러났어");
    //     });
    // }, [])

    const login = () => {
        console.log(name_ref.current.value, pw_ref.current.value)
        dispatch(loginFB({
            username: name_ref.current.value,
            password: pw_ref.current.value,
        }))
        navigate("/")
    }
    return (
        <div style={{ fontSize: "22px" }}>
            <Title>
                <img src={logo1} width="50px" height="50px" />
                <h3> 또 만나서 반가워요~ </h3>
                <img src={logo1} width="50px" height="50px" />
            </Title>
            <SubTitle>제가 얼마나 기다렸다구요 !!<TextAny> 멍멍</TextAny></SubTitle>
            <Container>
                <p style={{ textDecoration: "underline", fontSize: "25px", position: "relative", left: "-30%" }}>로그인</p>
                <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", padding: "5px", marginTop: "-20px" }}>
                    <Input><p>username :</p>
                        <input type="text" placeholder="user ID 입력하세요" ref={name_ref} /></Input>
                    <Input><p>password : </p>
                        <input type="password" placeholder="비밀번호 6~12자 입력하세요" ref={pw_ref} />
                        <Link onClick={() => { navigate("/signup") }}>아직 계정이 없으신가요?(회원가입)</Link></Input>
                </div>
                <ButtonWrap>
                    <button onClick={login}>로그인하기</button>
                </ButtonWrap>
            </Container>
            <IMAGE src={catimg} />
        </div>
    )
}

const Title = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-item : center;
    margin-top : 50px;
    gap : 20px;
    &> h3 {
        font-size : 35px;
        margin-top : 0px;
    }
`;

const SubTitle = styled.p`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-item : center;
    font-size : 21px;
    margin-top: -35px;
    gap : 10px;
    &> p{
        font-size : 25px;
        color: #EC728D;
        margin-top : 0px;
    }
`;

const Container = styled.div`
    display : inline-block;
    height : 50vh;
    width : 50%;
    margin-top : 43px;
    border : 4px solid #EC728D;
    border-radius : 30px;
    box-shadow : 1px 10px 50px #F8D4DC;
`;

const Input = styled.p`
    position : relative;
    margin : 38px;
    & > p{
        position : absolute;
        top : -30px;
        left : 20px;
        font-size : 18px;
    }
    & > input{
        position : absolute;
        top : 15px;
        left : 18px;
        width : 80%;
        height : 25px;
    }
`;
const Link = styled.button`
    position : absolute;
    top : 50px;
    right : calc(24% - 40px);
    font-family : jua;s
    font-size : 16px;
    color : #602d38;
    border : transparent;
    background : transparent;
    cursor : pointer;
    &: hover {
        color : #EC728D;
    }
`;

const ButtonWrap = styled.div`
    position : relative; 
    gap : 10px;
    margin-top : 90px;
    & > button{
        position : absolute;
        top: 101%;
        left :50%;
        transform:translate(-50%,0);
        font-family : jua;
        font-size : 17px;
        height : 40px;
        width : 130px;
        color : white;
        background : #EC728D;
        border-radius : 20px;
        border : 3px solid #602d38;
        cursor : pointer;
        &:hover{
            color : #EC728D;
            background : transparent;
            border-radius : 20px;
            border : 3px solid #602d38;
          }
    }
`;

const textAny = keyframes`
    0% {
        font-size : 25px;
        color: #EC728D;
        margin-top : 0px;
    }
    25% {
        font-size : 29px;
        color: #EC728D;
        margin-top : -11px;
    }
    50% {
        font-size : 25px;
        color: #EC728D;
        margin-top : 0px;
    }
    75% {
        font-size : 29px;
        color: #EC728D;
        margin-top : -11px;
    }
    100% {
        font-size : 25px;
        color: #EC728D;
        margin-top : 0px;
    }
`;

const TextAny = styled.p`
    animation : ${textAny} 1s 1s infinite linear alternate;
`;

const IMAGE = styled.img`
    max-widht : 170px;
    width : 17%;  
    height : auto;
    position : absolute;
    top : 500px;
    left : calc(9% - 10px);
`;

export default LogIn;