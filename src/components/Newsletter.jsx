import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

export const Newsletter = () => {
  return (
    <Container>
      <Title>Boletin informativo</Title>
      <Description>
        Obten noticias de proximos productos que estaran disponibles
      </Description>
      <InputContainer>
        <Input placeholder="ejemplo@correo.com" />
        <Button>Quiero suscribirme</Button>
      </InputContainer>
    </Container>
  );
};
const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px", textAlign: "center" })}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  ${mobile({ with: "90%" })}
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding-left: 20px;
  flex: 8;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #313131;
  background: #ffffffb4;
  text-align: center;
`;
