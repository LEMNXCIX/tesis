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
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

export const ProductsChart = ({ title, data, dataKey, grid }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey={dataKey}
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
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
