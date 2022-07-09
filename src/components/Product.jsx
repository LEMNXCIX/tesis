import React from "react";
import { Visibility, ShoppingCart, Heart } from '@mui/icons-material';
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <Link to={`/producto/${item._id}`}>
            {" "}
            <Visibility />
          </Link>
        </Icon>
        {/* <Icon>
          <Heart />
        </Icon> */}
      </Info>
    </Container>
  );
};
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000021;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 4px;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  border-radius: 4px;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
