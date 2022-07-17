import React, { useEffect, useState } from "react";
import {
  Email,
  CalendarMonth,
  LocationOn,
  Person,
  PhoneAndroid,
  Image,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { publicRequest, userRequest } from "../requestMetods";

export const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState([]);

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {

    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/find/"+userId);
        console.log(res.data)
        setUser(res.data);
        console.log(user)
      } catch (error) {}
    };
    getUsers();
  }, []);
  return (
    <Container>
      <TitleContainer>
        <Title>Información del usuario</Title>
        <Link style={{ textDecoration: "none" }} to="/cliente/nuevo">
          <AddButton>Cambiar estado</AddButton>
        </Link>
      </TitleContainer>
      <UserContainer>
        <Show>
          <ShowTop>
            <ShowImg
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <ShowTopTitle>
              <ShowUsername>{user.name}</ShowUsername>
              <ShowUserTitle></ShowUserTitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBotton>
            <ShowTitle>Detalles del usuario</ShowTitle>
            <ShowInfo>
              <ShowIcon>
                <Person />
              </ShowIcon>
              <ShowInfoTitle>{user.username?user.username:"Nombre de usuario no identificado"}</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ShowIcon>
                <CalendarMonth />
              </ShowIcon>

              <ShowInfoTitle className="userShowInfoTitle">
                {user.birthday?user.birthday:"El usuario no ha especificado una fecha de cumpleaños"}
              </ShowInfoTitle>
            </ShowInfo>
            <ShowTitle className="userShowTitle">Detalles de contacto</ShowTitle>
            <ShowInfo className="userShowInfo">
              <ShowIcon>
                <PhoneAndroid />
              </ShowIcon>
              <ShowInfoTitle className="userShowInfoTitle">
                {user.phone?user.phone:"El usuario no ha especificado una numero de contacto"}
              </ShowInfoTitle>
            </ShowInfo>
            <ShowInfo className="userShowInfo">
              <ShowIcon>
                <Email />
              </ShowIcon>
              <ShowInfoTitle className="userShowInfoTitle">
                {user.email?user.email:"No email"}
              </ShowInfoTitle>
            </ShowInfo>
            <ShowInfo className="userShowInfo">
              <ShowIcon>
                <LocationOn />
              </ShowIcon>
              <ShowInfoTitle className="userShowInfoTitle">
                New York | USA
              </ShowInfoTitle>
            </ShowInfo>
          </ShowBotton>
        </Show>
        {/* //TODO: Lista de productos en el carrito */}
        <Update>
          <UpdateTitle>Editar</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <label>Nombre de usuario</label>
                <UpdateInput type="text" placeholder="anabeck99" />
              </UpdateItem>
              <UpdateItem>
                <label>Nombre completo</label>
                <UpdateInput type="text" placeholder="Anna Becker" />
              </UpdateItem>
              <UpdateItem>
                <label>Email</label>
                <UpdateInput type="text" placeholder="anabeck99@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <label>Teléfono</label>
                <UpdateInput type="text" placeholder="+1 123 456 789" />
              </UpdateItem>
              <UpdateItem>
                <label>Dirección</label>
                <UpdateInput type="text" placeholder="New York | USA" />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRigth>
              <UpdateUpload>
                <UpdateImg
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <UpdateIcon>
                    <Image />
                  </UpdateIcon>{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UpdateUpload>{" "}
              <UpdateButton>Actualizar</UpdateButton>
            </UpdateRigth>
          </UpdateForm>
        </Update>
      </UserContainer>
    </Container>
  );
};
const Container = styled.div`
     flex: 7;
  padding: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const AddButton = styled.button`
  border: none;
  padding: 5px 15px 5px 5px;
  background-color: #c0dbb9;
  color: #465d40;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  Add {
    color: #465d40;
  }
  &:hover {
    background-color: #a7db9b;
  }
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Show = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const ShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const ShowUsername = styled.span`
  font-weight: 600;
`;
const ShowUserTitle = styled.span`
  font-weight: 300;
`;
const ShowBotton = styled.div`
  margin-top: 20px;
`;
const ShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const ShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;
const ShowIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
const ShowInfoTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-left: 10px;
`;
const Update = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UpdateLeft = styled.div``;
const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & label {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const UpdateInput = styled.input`
  border: none;
  padding: 0px 5px;
  margin: 5px 0px;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;
const UpdateRigth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 20px;
`;
const UpdateIcon = styled.i`
  cursor: pointer;
`;
const UpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
