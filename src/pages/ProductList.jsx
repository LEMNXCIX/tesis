import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort]= useState({})

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Categorias</FilterText>
          <Select name="categorias" onChange={handleFilters}>
            <Options>Piel</Options>
            <Options>Cremas</Options>
            <Options>Mascarillas</Options>
            <Options>Mas cosas</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar por</FilterText>
          <Select name="precio" onChange={(e)=>setSort(e.target.value)}>
            <Options value="asc">Precio mas bajo</Options>
            <Options value="desc">Precio mas alto</Options>
            <Options value="popular">Populares</Options>
            <Options value="nuevo">Nuevos</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: 4px;
  ${mobile({ marginTop: "10px" })}
`;
const Options = styled.option``;
