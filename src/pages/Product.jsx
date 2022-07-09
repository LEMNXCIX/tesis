import React, { useEffect, useState } from "react";
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { publicRequest } from "../requestMetods";
import { mobile } from "../responsive";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [cantidad, setCantindad] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleCantidad = (type) => {
    //*este metodo permite aumentar o dismuinir la cantidad de articulos
    if (type === "menos") {
      //* para que no se selecionen numeros menores a 1
      cantidad > 1 && setCantindad(cantidad - 1);
    } else {
      setCantindad(cantidad + 1);
    }
  };
  const handleClick = () => {
    // * Para actualizar el contador y los elementos del carrito
    dispatch(
      addProduct({ ...product, cantidad })
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>

        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cantidad</FilterTitle>
              <FilterOption type="radio" id="250" name="cantidad" />{" "}
              <label htmlFor="205">250ml</label>
              <FilterOption type="radio" id="500" name="cantidad" />{" "}
              <label htmlFor="500">500ml</label>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleCantidad("menos")}
              />
              <Amount>{cantidad}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleCantidad("mas")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>Añadir al carrito</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "20px" })}
`;
const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;
const Image = styled.img`
  width: 50%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterOption = styled.input`
  margin: 0px 5px 0px 20px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  &:hover {
    background-color: #f8f4f4;
  }
`;
