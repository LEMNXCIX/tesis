import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Login } from "../pages/Login";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";


export const Navbar = ({ user }) => {
  const cantidad = useSelector((state) => state.cart.cantidad);

  const [estadoModal, cambiarEstadoModal] = useState(false);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Buscar " autocomplete="off" />
            <FaSearch
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration:"none"}}>
            <Logo>Neutra.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/cart" style={{textDecoration:"none", color:"black"}}>
            <MenuItems>
              <FaShoppingCart />
              <Badge>{cantidad}</Badge>
            </MenuItems>
          </Link>
          {!user && (
            <MenuItems onClick={() => cambiarEstadoModal(!estadoModal)}>
              Iniciar Sesion
            </MenuItems>
          )}

          {user && (
            <MenuItems onClick={()=>dispatch(logOut())}>Cerrar Sesion</MenuItems>
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
           
            <Login cerrar={cambiarEstadoModal} user ={user}/>
          </Modal>
        </Right>
      </Wrapper>
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
  color: black;
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
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Badge = styled.span`
  background: #d0d94c;
  position: relative;
  height: 10px;
  width: 10px;
  padding: 0px 4px;
  top: -10px;
  left: -5px;
  font-size: 10px;
  border-radius: 50px;
`;
// const Button = styled.button`
//   display: block;
//   padding: 10px 30px;
//   border-radius: 4px;
//   color: #fff;
//   border: none;
//   background: #1766dc;
//   cursor: pointer;
//   font-family: "Roboto", sans-serif;
//   font-weight: 500;
//   transition: 0.3s ease all;
//   &:hover {
//     background: #0066ff;
//   }
// `;
// const Contenido = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   h1 {
//     font-size: 42px;
//     font-weight: 700;
//     margin-bottom: 10px;
//   }
//   p {
//     font-size: 18px;
//     margin-bottom: 20px;
//   }
//   img {
//     width: 100%;
//     vertical-align: top;
//     border-radius: 3px;
//   }
// `;
