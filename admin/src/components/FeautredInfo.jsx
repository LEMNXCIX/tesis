import React, { useState } from "react";
import { useEffect } from "react";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import styled from "styled-components";
import { userRequest } from "../requestMetods";

export const FeautredInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState();
  const [valor, setValor] = useState();

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("order/income");
        setIncome(res.data);
        setValor(res.data[0]?.total);
        setPerc((res.data[0].total * 100) / res.data[1].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  console.log(income);
  return (
    <Container>
      <Item>
        <Title>Ingresos</Title>
        <MoneyContainer>
          <Money>${valor}</Money>
        </MoneyContainer>
        <MoneyContainer>
          <MoneyRate>
            <div style={{"display":"flex"}}>
              {Math.floor(perc)}%
              {perc <0 ? (<Icon>
              <ArrowDownward color="red" />
            </Icon>):(<Icon>
              <ArrowUpward color="green" />
            </Icon>) }
            
            </div>
            
            <Sub>Comparado al ultimo mes</Sub>
          </MoneyRate>
        </MoneyContainer>
      </Item>
      <Item>
        <Title>Ventas</Title>
        <MoneyContainer>
          <Money>$1,4.00</Money>
          <MoneyRate>
            +1.8 %
            <Icon>
              <ArrowUpward color="green" />
            </Icon>
          </MoneyRate>
        </MoneyContainer>
        <Sub>Comparado al ultimo mes</Sub>
      </Item>
      <Item>
        <Title>Ventas</Title>
        <MoneyContainer>
          <Money>$1,4.00</Money>
          <MoneyRate>
            +1.8 %
            <Icon>
              <ArrowUpward color="green" />
            </Icon>
          </MoneyRate>
        </MoneyContainer>
        <Sub>Comparado al ultimo mes</Sub>
      </Item>
      <Item>
        <Title>Ventas</Title>
        <MoneyContainer>
          <Money>$1,4.00</Money>
          <MoneyRate>
            +1.8 %
            <Icon>
              <ArrowUpward color="green" />
            </Icon>
          </MoneyRate>
        </MoneyContainer>
        <Sub>Comparado al ultimo mes</Sub>
      </Item>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Item = styled.div`
  flex: 1;
  margin: 10px 10px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.span`
  font-size: 20px;
`;
const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Icon = styled.div`
  font-size: 14px;
  margin: 2px;
  color: ${(props) => props.color};
`;
const Sub = styled.span`
  font-size: 15px;
  color: gray;
  margin: 5px;
`;
