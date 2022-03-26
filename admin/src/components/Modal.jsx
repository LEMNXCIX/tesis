import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo,
  mostrarHeader,
  mostrarOverlay,
  posicionModalX,
  posicionModalY,
}) => {
  return (
    <>
      {estado && (
        <Overlay
          mostrarOverlay={mostrarOverlay}
          posicionModalX={posicionModalX}
          posicionModalY={posicionModalY}
        >
          <ContenedorModal>
            {mostrarHeader && (
              <EncabezadoModal>
                <h3>{titulo}</h3>
              </EncabezadoModal>
            )}
            <Cerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <FaTimes />
            </Cerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: ${(props)=> props.mostrarOverlay ? "blur(1px)" :"none"};
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0, 0, 0, 0.1)" : "rgba(0,0,0,0)"};
  z-index: 100;
  display: flex;
  align-items: ${(props) =>
    props.posicionModalX ? props.posicionModalX : "center"};
  justify-content: ${(props) =>
    props.posicionModalY ? props.posicionModalY : "center"};
  padding: 10px;
  transition: 0.3s ease all;

`;
const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 30px 10px;
  padding: 20px;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  h3 {
    font-weight: 500;
    font-size: 16px;
  }
`;
const Cerrar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  width: 25px;
  height: 20px;
  border-radius: 4px;
  transition: 0.3s ease all;

  &:hover {
    background: #f2f2f2;
  }
`;
