// Header.js
import React from "react";
import styled from "styled-components";
import '.././App.css';
import { Link, useLocation } from "react-router-dom";
import catlogo from '.././elements/images/Cat-Pink-icon.png';
import catlogo2 from '.././elements/images/Cat-Black-White-icon.png';

const Header = () => {
    const location = useLocation(); //state를 변환시켜주는 파라미터
    console.log(location);
    if (location.pathname === "/signup") return null;
    else if (location.pathname === "/login") return null;
    return (
        <div>
            <Top>
                <TopLeft>
                    <Link to='/'>
                        <img src={catlogo} width="auto" height="90px" />
                        <img src={catlogo2} width="auto" height="90px" />
                        <img src={catlogo} width="auto" height="90px" />
                        <img src={catlogo2} width="auto" height="90px" />
                    </Link>
                </TopLeft>
                <TopRight>
                    <Link to='/login'>
                        <Button>로그아웃</Button>
                    </Link>
                </TopRight>
            </Top>
            <Line />
        </div>

    );
}

const Top = styled.header`
    position : relative;
    height : 80px;
    // background-color: purple;
`;
const TopLeft = styled.div`
    position : absolute;
    top : 13px;
    left : 20px;
    // background-color: purple;
`;
const TopRight = styled.div`
    position : absolute;
    top : 15px;
    right : 20px;  
    // background-color: purple;
`;
const Button = styled.button`
    margin-top : 25px;
    font-family : jua;
    font-size : 17px;
    height : 40px;
    width : 130px;
    color : #602d38;
    background : #eee;
    border-radius : 20px;
    border : 3px solid #602d38;
    cursor : pointer;
    &:hover{
        color : #EC728D;
        background : transparent;
        border-radius : 20px;
        border : 3px solid #602d38;
    }
`;
const Line = styled.hr`
    // margin-top : -0.1px;
    margin : 25px 0;
    height: 20px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.2);
    // background-color: purple;
`;



export default Header;