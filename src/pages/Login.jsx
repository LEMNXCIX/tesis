import React, { useState } from "react";
import styled from "styled-components";
import { login, mensajeError } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorOutline } from "@mui/icons-material";

export const Login = ({ cerrar, user, setOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user); //si el usuario ha iniciado sesion se
  if (user) {
    cerrar(false);
  }
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setOpen(true);
  };
  return (
    <Container>
      <Wrapper>
        <Title>Inicio de sesión</Title>
        <Form>
          <Input
            placeholder="Correo electrónico o Nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching} opnener={true}>
            Iniciar sesión
          </Button>

          {error && (
            <Error>
              <ErrorOutline />ㅤ Error: {mensajeError}
            </Error>
          )}
          <Linked>No recuerdas tu contraseña?</Linked>
          <Link to={"/registro"}>
            <Linked
              onClick={() => {
                cerrar(false);
              }}
            >
              Crear nueva cuenta
            </Linked>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #665351;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  //color: #000;
  color: #665351;
  border: 2px solid #665351;
  background: #ffffffb4;
  //box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: 0.1s 0s ease-in-out;
  ${mobile({ width: "100%" })}
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
  &:hover {
    border: 2px solid #665351;
    background-color: #c0aaa8;
    color: #5a3908;
  }
`;

const Linked = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  text-align: center;
  background-color: #ff00003b;
  border-radius: 4px;
  padding: 10px;

  &ErrorOutline{
    color: red;
  }
`;
