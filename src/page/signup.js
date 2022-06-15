import React from "react";
import '.././App.css';
import styled from "styled-components";
import logo1 from '.././elements/images/logo_1.png';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupFB } from "../redux/modules/userM";

const SignUp = () => {
    const name_ref = React.useRef("");
    const nick_ref = React.useRef("");
    const pw_ref = React.useRef("");
    const chk_ref = React.useRef("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [pwchk, setPwchk] = React.useState("");

    //아이디, 비밀번호 체크 
    const checkID = (e) => {
        // console.log(e.target.value);
        if (e.target.value.length < 6) {
            setName("중복된 ID 입니다.");
            name_ref.current.value = "";
        } else setName("");
    };
    const checkPW = (e) => {
        const password1RegExp = /^[a-z0-9]{6,12}$/;
        if (!password1RegExp.test(pw_ref.current.value) || pw_ref.current.value === null) {
            setPw("6~12자로 입력해주세요.")
            pw_ref.current.value = "";
        } else setPw("");
    }
    const samePW = (e) => {
        if (chk_ref.current.value !== pw_ref.current.value) {
            setPwchk("비밀번호가 일치하지 않습니다.")
            chk_ref.current.value = "";
        } else setPwchk("")
    }

    const signup = () => {
        if (name_ref.current.value && nick_ref.current.value && pw_ref.current.value && chk_ref.current.value) {
            dispatch(signupFB({
                username: name_ref.current.value,
                nickname: nick_ref.current.value,
                password: pw_ref.current.value
            }))
            navigate("/")
        } else {
            window.alert("빈 값이 있습니다.")
            navigate("/signup")
            name_ref.current.value="";
            nick_ref.current.value="";
            pw_ref.current.value ="";
            chk_ref.current.value="";
            setName("");
            setPw("");
            setPwchk("");
        }

    }

    return (
        <div style={{ fontSize: "22px" }}>
            <Title>
                <img src={logo1} width="50px" height="50px" />
                <h3>우리집 주인님이 제일좋아!</h3>
                <img src={logo1} width="50px" height="50px" />
            </Title>
            <SubTitle><p>마이펫 커뮤니티</p> 에 오신 것을 환영합니다.</SubTitle>
            <Container>
                <p style={{ textDecoration: "underline", fontSize: "25px", position: "relative", left: "-30%" }}>회원가입</p>
                <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", padding: "5px", marginTop: "-20px" }}>
                    <Input><p>username :</p>
                        <input type="text" placeholder="user ID 입력하세요" ref={name_ref} onBlur={checkID} />
                        <Validation>{name}</Validation></Input>
                    <Input><p>nickname : </p><input placeholder="마이펫 이름 입력하세요" ref={nick_ref} /></Input>
                    <Input><p>password : </p>
                        <input type="password" placeholder="비밀번호 6~12자 입력하세요" ref={pw_ref} onBlur={checkPW} />
                        <Validation>{pw}</Validation></Input>
                    <Input><p>passwordCheck :</p>
                        <input type="password" placeholder="비밀번호 한번 더 확인하세요" ref={chk_ref} onBlur={samePW} />
                        <Validation>{pwchk}</Validation></Input>
                </div>
                <ButtonWrap>
                    <button onClick={signup}>가입하기</button>
                    <button onClick={() => { navigate('/login') }}>로그인 하러가기</button>
                </ButtonWrap>
            </Container>
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
        color: #EC728D;
        margin-top : 0px;
    }
`;

const Container = styled.div`
    display : inline-block;
    height : 66vh;
    width : 50%;
    margin-top : 50px;
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

const Validation = styled.div`
    position : absolute;
    top : 44px;
    left : 21px;
    font-size : 12px;
    color : red;
`;

const ButtonWrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-item : center;
    gap : 10px;
    margin-top : 60px;
    & > button{
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
            border : 3px solid #602d38;;
          }
    }
`;


export default SignUp;