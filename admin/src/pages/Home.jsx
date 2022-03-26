import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { FeautredInfo } from "../components/FeautredInfo";
import { WidgetLg } from "../components/WidgetLg";
import { WidgetSm } from "../components/WidgetSm";
import { userRequest } from "../requestMetods";
export const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        const list = res.data.sort((a, b) => {
          return a._id - b.i_id;
        });
        list.map((item) => 
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Usuarios nuevos": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

// console.log(userStats)

  return (
    <Container>
      <FeautredInfo />
      <Chart
        data={userStats}
        title="Analitica de clientes"
        grid
        dataKey="Usuarios nuevos"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
};
const Container = styled.div`
  flex: 4;
`;
const Widgets = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
`;
