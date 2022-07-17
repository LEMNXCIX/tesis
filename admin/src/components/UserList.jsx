import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { userRequest } from "../requestMetods";
import { DatagridElement } from "../elements/Datagrid";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        console.log(res.data);
        setUsers(res.data);
        console.log(users);
      } catch (error) {}
    };
    getUsers();
  }, []);

  const handleDelete = (id) => {};

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "Cliente",
      width: 200,
      renderCell: (params) => {
        return (
          <ListUser>
            <Img src={params.row.avatar} alt="" />
            {params.row.name}
          </ListUser>
        );
      },
    },
    { field: "email", headerName: "Correo electrónico", width: 200 },
    {
      field: "action",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/cliente/" + params.row._id}>
              <ListEdit>
                <Visibility />
              </ListEdit>
            </Link>
            <DeleteI onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <Title>Lista de clientes</Title>
      </TitleContainer>
      <DatagridElement columns={columns} data={users} />
    </Container>
  );
};
const Title = styled.h1``;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;
const Container = styled.div`
  flex: 7;
  padding: 20px;
`;
const ListUser = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ListEdit = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #ebf1fe;
  color: #2a7ade;
  cursor: pointer;
  margin-right: 20px;
  font-size: 16px;
`;

const DeleteI = styled(Delete)`
  background-color: #fff0f1;
  color: #d95087;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;
