import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Errors from "../elements/Errors";
import { addProduct, mensajeApiCall, updateProduct } from "../redux/apiCalls";
import { userRequest } from "../requestMetods";

export const EditProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  //Traemos los datos desde la api
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("products/one/" + productId);
        setInputs(res.data);
      } catch (error) {}
    };
    getUsers();
  }, [productId]);

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({
    isErrors: false,
    errors: [],
  });

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  //Guardamos  la data actualizada
  const handleClick = (e) => {
    e.preventDefault();
    const product = { ...inputs };
    updateProduct(productId, product, dispatch);
    mensajeApiCall &&
      setErrors({
        isErrors: true,
        errors: mensajeApiCall.message,
      });
  };

  return (
    <Container>
      <Title>Editar producto</Title>
      <Form>
        <Item>
          <label>Imagen</label>
          <img src={inputs.image} alt="" />
        </Item>
        <Item>
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            value={inputs.name ? inputs.name : "Cargando..."}
            placeholder="Nombre del producto"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Descripción</label>
          <input
            name="description"
            type="text"
            value={inputs.description}
            placeholder="Agrega una breve descripción del producto"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Categoría</label>
          <input
            name="categories"
            type="text"
            value={inputs.categories}
            placeholder="Ingresa una categoría"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Precio</label>
          <input
          name="price"
            value={inputs.price}
            type="number"
            placeholder="Ingresa el precio"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Cantidad</label>
          <input
            name="stock"
            type="number"
            value={inputs.stock}
            placeholder="Cantidad disponible"
            onChange={handleChange}
          />
        </Item>
        <Button onClick={handleClick}>Actualizar</Button>
      </Form>
      <Errors errors={errors} />
    </Container>
  );
};

const Container = styled.div`
  flex: 7;
  padding: 20px;
`;
const Title = styled.h1``;
const Form = styled.form`
  margin-top: 10px;
`;
const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
  }
  select {
    padding: 10px;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 4px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
