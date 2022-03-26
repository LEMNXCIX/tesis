import React from "react";
import {
    MdCalendarToday,
  MdLocationSearching,
  MdMailOutline,
  MdPermIdentity,
  MdPhoneAndroid,
  MdPublish,
  } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const User = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Editar usuario</Title>
        <Link to="/nuevoUsuario">
          <AddButton>Crear</AddButton>
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
              <ShowUsername>Anna Becker</ShowUsername>
              <ShowUserTitle>Ingeniera</ShowUserTitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBotton>
            <ShowTitle>Account Details</ShowTitle>
            <ShowInfo>
              <ShowIcon>
                <MdPermIdentity />
              </ShowIcon>
              <ShowInfoTitle>anabeck99</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ShowIcon>
                <MdCalendarToday />
              </ShowIcon>

              <ShowInfoTitle className="userShowInfoTitle">
                10.12.1999
              </ShowInfoTitle>
            </ShowInfo>
            <ShowTitle className="userShowTitle">Contact Details</ShowTitle>
            <ShowInfo className="userShowInfo">
              <ShowIcon>
                <MdPhoneAndroid />
              </ShowIcon>
              <ShowInfoTitle className="userShowInfoTitle">
                +1 123 456 67
              </ShowInfoTitle>
            </ShowInfo>
            <ShowInfo className="userShowInfo">
              <ShowIcon>
                <MdMailOutline />
              </ShowIcon>
              <ShowInfoTitle className="userShowInfoTitle">
                annabeck99@gmail.com
              </ShowInfoTitle>
            </ShowInfo>
            <ShowInfo className="userShowInfo">
              <ShowIcon>
                <MdLocationSearching />
              </ShowIcon>
              <ShowInfoTitle className="userShowInfoTitle">
                New York | USA
              </ShowInfoTitle>
            </ShowInfo>
          </ShowBotton>
        </Show>
        <Update>
          <UpdateTitle>Editae</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <lable>Nombre de usuario</lable>
                <UpdateInput type="text" placeholder="anabeck99" />
              </UpdateItem>
              <UpdateItem>
                <lable>Nombre completo</lable>
                <UpdateInput type="text" placeholder="Anna Becker" />
              </UpdateItem>
              <UpdateItem>
                <lable>Email</lable>
                <UpdateInput type="text" placeholder="anabeck99@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <lable>Telefono</lable>
                <UpdateInput type="text" placeholder="+1 123 456 789" />
              </UpdateItem>
              <UpdateItem>
                <lable>Direccion</lable>
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
                    <MdPublish />
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
  flex: 4;
  padding: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
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
  font-size: 16px;
`;
const ShowInfoTitle = styled.span`
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
