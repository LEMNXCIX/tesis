import React from "react";
import styled from "styled-components";
import Data from "../Json/Informacion.json";
import { CategoryItem } from "./CategoryItem";
import {mobile} from "../responsive"

export const Categories = () => {
  return (
    <>
      <Title>Categorias</Title>
      <Container>
        {Data.categorias.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  ${mobile({padding: "0px", flexDirection:"column"})}
`;
const Title = styled.h1`
padding-top: 10px;
font-size: 20px;
  color: black;
  letter-spacing: 3px;
  margin: 20px 0px 0px 30px;
`;