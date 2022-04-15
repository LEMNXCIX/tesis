import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { mensajeApiCall } from "../redux/apiCalls";
import styled from "styled-components";

export const Announcement = () => {
  const [estado, cambiarEstado] = useState(true);
  return (
    <>
      {estado && (
        <Container>
          <Text>
            Oferta!! Obten el 10% de descuento por compras superiores a $50 {mensajeApiCall}
          </Text>
          <Cerrar onClick={() => cambiarEstado(false)}>
            <FaTimes />
          </Cerrar>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: relative;
  background-color: #e2cebd;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
`;
const Text = styled.div`
text-align: center;
margin: 10px;
width: 90%;
  font-size: 12px;
  font-weight: 500;
`;
const Cerrar = styled.button`
  position: absolute;
  align-items: center;
  display: flex;
  justify-content: center;
  right: 5px;
  width: 10px;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #292929;
  & :hover {
    color: #000;
  }
`;
