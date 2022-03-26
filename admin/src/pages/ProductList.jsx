import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
import { deleteProduct, getProducts } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../components/Modal";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [identificador, setIdentificador] = useState();
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
    cambiarEstadoModal(!estadoModal);
    console.log("se elimino" + id);
    window.location.reload();
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <Item>
            <Img src={params.row.img} alt="" />
            {params.row.title}
          </Item>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 70 },
    {
      field: "cantidad",
      headerName: "Status",
      width: 70,
    },
    {
      field: "price",
      headerName: "Price",
      width: 70,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/producto/" + params.row._id}>
              <Edit>Edit</Edit>
            </Link>
            <Delete
              onClick={() => {
                cambiarEstadoModal(!estadoModal);
                setIdentificador(params.row._id);
              }}
            />
            {/* <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
                titulo={"ELiminar :" + id}
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModalX={"center"}
                posicionModalY={"center"}
              >
                <Wrapper>
                  <Button onClick={() => cambiarEstadoModal(!estadoModal)}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => handleDelete(id)}
                    onMouseEnter={() => {
                      console.log(id);
                    }}
                  >
                    Eliminar
                  </Button>
                </Wrapper>
              </Modal> */}

            {/* 
            onClick={() => handleDelete(params.row._id)}*/}
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        rowsPerPageOptions={[3]}
        pageSize={5}
        checkboxSelection
      />
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        titulo={"Eliiminar producto" + identificador}
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModalX={"center"}
        posicionModalY={"center"}
      >
        <Wrapper>
          <Button onClick={() => cambiarEstadoModal(!estadoModal)}>
            Cancelar
          </Button>
          <Button onClick={() => handleDelete(identificador)}>Eliminar</Button>
        </Wrapper>
      </Modal>
    </Container>
  );
};
const Container = styled.div`
  flex: 4;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 10px;
`;

const Edit = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #e5faf2;
  color: #3bb077;
  cursor: pointer;
  margin-right: 20px;
  font-size: 16px;
`;
const Delete = styled(MdDeleteOutline)`
  background-color: #fff0f1;
  color: #d95087;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
`;
const Wrapper = styled.div`
  margin: 10px 100px;
  display: flex;
  justify-content: space-between;
`;
