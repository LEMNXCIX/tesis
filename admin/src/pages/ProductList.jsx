import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Modal } from "../components/Modal";
import { Add,  Delete  } from "@mui/icons-material";
import { userRequest } from "../requestMetods";
import { DatagridElement } from "../elements/Datagrid";

export const ProductList = () => {
  const dispatch = useDispatch();
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [identificador, setIdentificador] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
    cambiarEstadoModal(!estadoModal);
    console.log("se elimino" + id);
    window.location.reload();
  };

  //Definimos las columas que se van a renderizar en el data grid
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Producto",
      width: 200,
      renderCell: (params) => {
        return (
          <Item>
            <Img src={params.row.image} alt="" />
            {params.row.name}
          </Item>
        );
      },
    },
    { field: "categories", headerName: "Categoría", width: 100 },
    {
      field: "stock",
      headerName: "Cantidad",
      width: 100,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 70,
    },
    {
      field: "action",
      headerName: "Acciones",
      flex:1,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/producto/edit/" + params.row._id}>
              <Edit>Edit</Edit>
            </Link>
            <DeleteI
              onClick={() => {
                cambiarEstadoModal(!estadoModal);
                setIdentificador(params.row._id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <Title>Lista de productos</Title>
        <Link style={{ textDecoration: "none" }} to="/producto/nuevo">
          <AddButton>
            <Add /> Nuevo
          </AddButton>
        </Link>
      </TitleContainer>
      <DatagridElement columns={columns} data={products} />

      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        titulo={"Eliminar producto" + identificador}
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
    flex: 7;
  padding: 20px;
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
const DeleteI = styled(Delete)`
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
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px 15px 5px 5px;
  background-color: #c0dbb9;
  color: #465d40;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  Add {
    color: #465d40;
  }
  &:hover {
    background-color: #a7db9b;
  }
`;
const Title = styled.h1``;
