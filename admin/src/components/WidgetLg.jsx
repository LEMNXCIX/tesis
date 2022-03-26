import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMetods";
import {format, register} from "timeago.js"


//esta es la ttradicion e  timeago.js
register('es_ES', (number, index, total_sec) => [
  ['justo ahora', 'ahora mismo'],
  ['hace %s segundos', 'en %s segundos'],
  ['hace 1 minuto', 'en 1 minuto'],
  ['hace %s minutos', 'en %s minutos'],
  ['hace 1 hora', 'en 1 hora'],
  ['hace %s horas', 'in %s horas'],
  ['hace 1 dia', 'en 1 dia'],
  ['hace %s dias', 'en %s dias'],
  ['hace 1 semana', 'en 1 semana'],
  ['hace %s semanas', 'en %s semanas'],
  ['1 mes', 'en 1 mes'],
  ['hace %s meses', 'en %s meses'],
  ['hace 1 año', 'en 1 año'],
  ['hace %s años', 'en %s años']
][index]);

export const WidgetLg = () => {
  const [orders, setOrdes] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("order");
        setOrdes(res.data);
      } catch (err) {}
    };
    getOrders();
  }, []);
  return (
    <Container>
      <Title>Ultimas ordenes</Title>
      <Table>
        <TBody>
          <Fila>
            <Th>Comprador</Th>
            <Th>Fecha</Th>
            <Th>Monto</Th>
            <Th>Estado</Th>
          </Fila>
          {orders.map((order, item) => (
            <Fila key={item}>
              <User>
                <Img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <Name>{order.userId}</Name>
              </User>
              <Date>{format(order.createdAt, 'es_ES')}</Date>
              <Amount>${order.amount}</Amount>
              <Status>
                <Button type={order.status}>{order.status}</Button>
              </Status>
            </Fila>
          ))}
        </TBody>
      </Table>
    </Container>
  );
};
const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const TBody = styled.tbody``;
const Fila = styled.tr`
  text-align: left;
`;
const Th = styled.th``;
const User = styled.th`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Name = styled.span`
  font-weight: 300;
`;
const Date = styled.th`
  font-weight: 300;
`;
const Amount = styled.th`
  font-weight: 300;
`;
const Status = styled.th``;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => {
    switch (props.type) {
      case "Aprobado":
        return "#e5faf2";
      case "Rechazado":
        return "#fff0f1";
      default:
        return "#ebf1fe";
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "Aprobado":
        return "#3bb077";
      case "Rechazado":
        return "#d95087";
      default:
        return "#2a7ade";
    }
  }};
`;
