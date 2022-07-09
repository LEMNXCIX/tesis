import React from "react";
import styled from "styled-components";
import { FaBell, FaCog, FaGlobe } from "react-icons/fa";
import { MdBell,MdLogout,MdSettings } from "react-icons/md";
import { Logout } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";
import { useSelector } from "react-redux";

export const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Neutra.Admin</Logo>
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
            <MdSettings />
          </IconContainer>
          <Avatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          {user && (
            <MenuItems onClick={() => dispatch(logOut())}>
              <Logout />
            </MenuItems>
          )}
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
  color: #fbb15c;
  cursor: pointer;
`;
const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  //color: #555;
  font-size: 20px;
  color: #665351;

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
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #665351;

`;
