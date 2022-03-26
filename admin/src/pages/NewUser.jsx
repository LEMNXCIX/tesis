import React from "react";
import styled from "styled-components";

export const NewUser = () => {
  return (
    <Container>
      <Title>Nuevo Usuario</Title>
      <Form>
        <Item>
          <label>Nombre de usuario</label>
          <input type="text" placeholder="jhon" />
        </Item>
        <Item>
          <label>Nombre completo</label>
          <input type="text" placeholder="jhon ndfjsd" />
        </Item>
        <Item>
          <label>Correo electronico</label>
          <input type="email" placeholder="jhon@gamil.com" />
        </Item>
        <Item>
          <label>Contrasenia</label>
          <input type="password" placeholder="Contrasenia" />
        </Item>
        <Item>
          <label>Telefono</label>
          <input type="tel" placeholder="+1 234 567 89" />
        </Item>
        <Item>
          <label>Direccion</label>
          <input type="text" placeholder="Por mi casa" />
        </Item>
        <Item>
          <label>Genero</label>
          <Gender>
            <input type={"radio"} id="male" value={"male"} />
            <label htmlFor="male">Masculino</label>
            <input type={"radio"} id="female" value={"female"} />
            <label htmlFor="female">Femenino</label>
            <input type={"radio"} id="other" value={"other"} />
            <label htmlFor="other">Otro</label>
          </Gender>
        </Item>
        <Item>
            <label>Activo</label>
            <Select name="active" id="active">
                <option value={"si"}>Si</option>
                <option value={"no"}>No</option>
            </Select>
        </Item>
        <Button>Crear</Button>
      </Form>
    </Container>
  );
};
const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  label {
    margin-bottom: 10px;
    font-style: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input {
    height: 20px;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
`;
const Gender = styled.div`
  label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
  input {
    margin-top: 15px;
  }
`;
const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
