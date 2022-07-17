import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { mensajeApiCall } from "../redux/apiCalls";
import styled from "styled-components";

export const Announcement = ({ text, close, color }) => {
  const [estado, cambiarEstado] = useState(true);
  return (
    <>
      {estado && (
        <Container color={color}>
          <Text>
            {text
              ? text
              : "Encuentra productos de belleza, cosmética, cuidado personal y mucho mas."}
          </Text>
          {close && (
            <Cerrar onClick={() => cambiarEstado(false)}>
              <Close fontSize="inherit" />
            </Cerrar>
          )}
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: relative;
  
  background-color: ${props => props.color ? props.color : "#ffefc9"};
  color: #625737;
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
  right: 05px;
  width: 10px;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #292929;
  & :hover {
    color: #5a3908;
  }
`;
