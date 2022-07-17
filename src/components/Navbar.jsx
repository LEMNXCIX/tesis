import React, { useState } from "react";
import styled from "styled-components";
import { mobile, mobileBool } from "../responsive";
import {
  Search,
  ShoppingCart,
  Login as LogIn,
  Logout,
  AdminPanelSettings,
} from "@mui/icons-material";
import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Login } from "../pages/Login";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";
import { Alert } from "../elements/Alert";

export const Navbar = ({ user }) => {
  const cantidad = useSelector((state) => state.cart.cantidad);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function funcionCerrar() {
    dispatch(logOut());
    abrir();
  }
  function abrir() {
    setOpen(true);
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Buscar " autocomplete="off" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Enlace to="/">
            <Logo>Neutra.</Logo>
          </Enlace>
        </Center>
        <Right>
          <Enlace to="/cart">
            <MenuItems>
              <Cart />
              <Badge>{cantidad}</Badge>
            </MenuItems>
          </Enlace>
          {!user && (
            <MenuItems onClick={() => cambiarEstadoModal(!estadoModal)}>
              <TipoBoton>
                <LogIn />
                {mobileBool ? "" : "ㅤIniciar Sesión"}
              </TipoBoton>
            </MenuItems>
          )}

          {user && user.isAdmin &&   (
            <MenuItems>
              <TipoBoton>
                <AdminPanelSettings />
                {mobileBool ? "" : " ㅤAdmin Panel"}
              </TipoBoton>
            </MenuItems>
          )}
          {user && (
            <MenuItems onClick={() => funcionCerrar()}>
              <TipoBoton>
                <Logout />
                ㅤCerrar Sesión
              </TipoBoton>
            </MenuItems>
          )}
          <Modal
            estado={estadoModal}
            cambiarEstado={cambiarEstadoModal}
            // titulo="Inicio de sesion"
            mostrarHeader={true}
            mostrarOverlay={true}
            posicionModalX={"center"}
            posicionModalY={"center"}
          >
            {/* <Contenido>
              <h1>Ventana Modal</h1>
              <p>ANFDLADN</p>
              <Button>Aceptar</Button>
            </Contenido> */}

            <Login cerrar={cambiarEstadoModal} user={user} setOpen={setOpen} />
          </Modal>
        </Right>
      </Wrapper>
      <Alert open={open} setOpen={setOpen} />
    </Container>
  );
};
const Container = styled.nav`
  user-select: none;
  z-index: 5;
  background-color: #ffffffc9;
  height: 60px;
  ${mobile({ heigth: "50px" })}
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padd: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1; /* Se usa para distribuir equitativamente cada flex del ancho total */
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none; /*Para quitar el borde al selecionar */
`;

const Center = styled.div`
  flex: 1;
  text-align: left;
  justify-content: center;
  display: flex;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  color: #fbb15c;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;
const MenuItems = styled.div`
  cursor: pointer;
  color: #665351;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Badge = styled.span`
  //color: #e4c19d;
  //background: #6d5233;
  color: #6d5233;
  background-color: #e4c19d;
  position: relative;
  height: 10px;
  width: 10px;
  padding: 0px 4px;
  top: -15px;
  left: -10px;
  font-size: 10px;
  border-radius: 50px;
  ${mobile({ fontSize: "14px" })}
`;
const Enlace = styled(Link)`
  text-decoration: none;
  color: #665351;
`;
const TipoBoton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  color: #665351;
  border: 2px solid transparent;
  background: #ffffffb4;
  transition: 0.1s 0s ease-in-out;
  &:hover {
    border: 2px solid #665351;
    background-color: #c0aaa8;
    color: #5a3908;
  }
`;

const Cart = styled(ShoppingCart)`
  color: #665351;
  ${mobile({ fontSize: "20px" })}
  &:hover {
    color: #5a3908;
  }
`;
const SearchIcon = styled(Search)`
  cursor: pointer;
`;
