import React, { useEffect, useState } from "react";
import { MdVisibility } from "react-icons/md";
import styled from "styled-components";
import { userRequest } from "../requestMetods";

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user/?new=true");
        setUsers(res.data);
      } catch (err) {}
    };
    getUsers();
  }, []);
  return (
    <Container>
      <Tilte>Nuevos miembros</Tilte>
      <List>
        {users.map((user, item) => (
          <ListItem key={item}>
            <Img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
            />
            <User>
              <Username>{user.username}</Username>
              <UserTitle>Ingeniero</UserTitle>
            </User>
            <Button>
              <Icon>
                <MdVisibility />
              </Icon>
              Ver
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
const Tilte = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.span`
  font-weight: 600;
  padding: 5px;
`;
const UserTitle = styled.span`
  font-weight: 300;
  padding: 5px;
`;
const Icon = styled.i`
  font-size: 16px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 7px 5px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
