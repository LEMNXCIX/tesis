import React from "react";
import styled from "styled-components";
import {
  FaBell,
  FaCog,
  FaGlobe,
} from "react-icons/fa";

export const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>NeutraAdmin</Logo>
        </Left>
        <Rigth>
          <IconContainer>
            <FaBell />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <FaGlobe />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <FaCog />
          </IconContainer>
          <Avatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </Rigth>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div``;
const Rigth = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  color: #555;
  font-size: 20px;
`;
const IconBadge = styled.span`
width: 18px;
height: 18px;
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
