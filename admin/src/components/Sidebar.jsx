import React from "react";
import styled from "styled-components";
import {
  MdAttachMoney,
  MdHome,
  MdLeaderboard,
  MdPermIdentity,
  MdStorefront,
  MdTimeline,
  MdTrendingUp,
} from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Navlink to="/">
              <ListItem>
                <Icon>
                  <MdHome />
                </Icon>
                Home
              </ListItem>
            </Navlink>
            <ListItem>
              <Icon>
                <MdTimeline />
              </Icon>
              Analityca
            </ListItem>
            <ListItem>
              <Icon>
                <MdTrendingUp />
              </Icon>
              Ventas
            </ListItem>
          </List>
          <Title>Menu Rapido</Title>
          <List>
            <Navlink to="/usuarios">
              <ListItem>
                <Icon>
                  <MdPermIdentity />
                </Icon>
                Usuarios
              </ListItem>
            </Navlink>{" "}
            <Navlink to="/productos">
              <ListItem>
                <Icon>
                  <MdStorefront />
                </Icon>
                Productos
              </ListItem>
            </Navlink>
            <ListItem>
              <Icon>
                <MdAttachMoney />
              </Icon>
              Transaciones
            </ListItem>
            <ListItem>
              <Icon>
                <MdLeaderboard />
              </Icon>
              Reportes
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  height: calc(100% - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const Menu = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const List = styled.ul`
  padding: 5px;
`;
const Navlink = styled(Link)`
  text-decoration: none;
  color: #555;
`;
const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  font-size: 30px;
  text-decoration: none;
`;
