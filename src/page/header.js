// Header.js
import React from "react";
import styled from "styled-components";
import '.././App.css';
import { Link } from "react-router-dom";
import catlogo from '.././elements/images/cat_img.png';

const Header = () => {
    if (window.location.pathname === "/signup") return null;
    else if (window.location.pathname === "/login") return null;
    return (
        <div>
            <Top>
                <TopLeft>
                    <Link to='/'>
                        <img src={catlogo} width="auto" height="75px" />
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
    height : 70px;
`;
const TopLeft = styled.div`
    position : absolute;
    top : 13px;
    left : 20px;
`;
const TopRight = styled.div`
    position : absolute;
    top : 20px;
    right : 20px;  
`;
const Button = styled.button`
    margin-top : 10px;
    font-family : jua;
    font-size : 17px;
    height : 40px;
    width : 130px;
    color : #602d38;
    background : #ddd;
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
    margin : 30px 0px;
    border : 1px solid #ddd;
`;



export default Header;