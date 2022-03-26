import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { userRows } from "../dummyData";

export const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "user",
      headerName: "User",
      flex: 1,
      renderCell: (params) => {
        return (
          <ListUser>
            <Img src={params.row.avatar} alt="" />
            {params.row.username}
          </ListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <ListEdit>Edit</ListEdit>
            </Link>
            <Delete onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        filterMode={"client"}
      />
    </Container>
  );
};
const Container = styled.div`
  flex: 4;
  width: 100%;
  margin: 10px;
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
  background-color: #e5faf2;
  color: #3bb077;
  cursor: pointer;
  margin-right: 20px;
  font-size: 16px;
`;

const Delete = styled(MdDelete)`
  background-color: #fff0f1;
  color: #d95087;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;
