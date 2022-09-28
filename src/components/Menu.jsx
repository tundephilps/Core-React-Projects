import React from "react";
import styled from "styled-components";
//import LamaTube from "../img/logo.png";
import { AiOutlineHome } from "react-icons/ai"
import { BsBrightnessHighFill } from "react-icons/bs"
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 120vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            Core React Projects
          </Logo>
        </a>
        <Item>
        <AiOutlineHome />
          Home
        </Item>
        <Item>
          <Link to="/Password">
            Password Strength
        </Link>
        </Item>
        <Item>
            <a href="/Login">Login Form</a>
          
        </Item>
        <Hr />
        <Item>
        <a href="/Checkbox">CheckBox Mapping</a>
          
        </Item>
        <Item>
        <a href="/Inputtags">Input Tags</a>
          
        </Item>
        <Hr />
        
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          Music
        </Item>
        <Item>
          Sports
        </Item>
        <Item>
          Gaming
        </Item>
        <Item>
          Movies
        </Item>
        <Item>
          News
        </Item>
        <Item>
          Live
        </Item>
        <Hr />
        <Item>
          Settings
        </Item>
        <Item>
          Report
        </Item>
        <Item>
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <BsBrightnessHighFill />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;