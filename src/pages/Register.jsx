import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crea una cuenta</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de usuario " />
        <Input placeholder="Correo electronico" />
          <Input placeholder="Contrasena" />
          <Input placeholder="Confirmar contrasena" />
          
          <Agreement>Al crear una cuenta estas de acuerdo con el manejo de tu informacion personal de acuerdo con nuestra <b>Politica de privacidad</b></Agreement>
          <Button>Crear cuenta</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
${mobile({ width: "75%" })}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
${mobile({ flexWrap: "nowrap", flexDirection:"column" })}

`;
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 4px;


`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button= styled.button`
padding: 15px;
width: 40%;
padding: 15px 0px;
border-radius: 4px;
cursor: pointer;
${mobile({ width: "100%" })}
`;