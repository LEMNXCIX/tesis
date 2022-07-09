import React from "react";
import styled from "styled-components";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart data={data}>
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#ffefc9" stopOpacity={0.8}/>
      <stop offset="100%" stopColor="#ffefc9" stopOpacity={0}/>
    </linearGradient>
  </defs>
          <XAxis dataKey="name" stroke="#625737" />
          <Bar dataKey={dataKey} />
          <Area type="monotone" dataKey={dataKey} stroke="#625737" fillOpacity={1} fill="url(#colorUv)" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};
const Container = styled.div`
  margin: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
