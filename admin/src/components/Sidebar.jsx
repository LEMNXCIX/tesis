import React from "react";
import styled from "styled-components";
import {
  Home,
  Insights,
  Leaderboard,
  Group,
  Storefront,
  AttachMoney,
  Article,
} from "@mui/icons-material";
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
                  <Home />
                </Icon>
                Home
              </ListItem>
            </Navlink>
            <ListItem>
              <Icon>
                <Insights />
              </Icon>
              Analityca
            </ListItem>
            <ListItem>
              <Icon>
                <Leaderboard />
              </Icon>
              Ventas
            </ListItem>
          </List>
          <Title>Menu Rapido</Title>
          <List>
            <Navlink to="/usuarios">
              <ListItem>
                <Icon>
                  <Group />
                </Icon>
                Usuarios
              </ListItem>
            </Navlink>{" "}
            <Navlink to="/productos">
              <ListItem>
                <Icon>
                  <Storefront />
                </Icon>
                Productos
              </ListItem>
            </Navlink>
            <ListItem>
              <Icon>
                <AttachMoney />
              </Icon>
              Transaciones
            </ListItem>
            <ListItem>
              <Icon>
                <Article />
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
  background-color: rgb(255, 255, 255);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #665351;
`;
const Menu = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h3`
  font-size: 13px;
  color: #5a3908;
`;
const List = styled.ul`
  padding: 5px;
`;
const Navlink = styled(Link)`
  text-decoration: none;
  color: #665351;
`;
const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: 0.5ms 0.9ms ease-in-out;
  &:hover {
    background-color: #c0aaa8;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  font-size: 30px;
  text-decoration: none;
`;
