import { DataGrid, esES } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
import { deleteProduct, getProducts } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../components/Modal";
import { MdAdd } from "react-icons/md";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

//PARA TRADUCIR EL DATAGRID

//FUNCION  DE BUSQUEDA EN EL DATA GRID - Inicio
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Busqueda"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
//FUNCION  DE BUSQUEDA EN EL DATA GRID - fin

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
      headerName: "Producto",
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
      headerName: "Cantidad",
      width: 80,
    },
    {
      field: "price",
      headerName: "Precio",
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
          </>
        );
      },
    },
  ];
 //ELEMENTOS  DE BUSQUEDA EN EL DATA GRID
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState(products);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = products.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(products);
  }, [products]);


  return (
    <Container>
      <TitleContainer>
        <Title>Lista de productos</Title>
        <Link to="/nuevoProducto">
          <AddButton>
            <MdAdd /> Nuevo
          </AddButton>
        </Link>
      </TitleContainer>
      <DataGridContainer>
        {/* rows contiene los productos, esta definido en un estado de react mas arriba */}
        <DataGrid
          rows={rows}
          disableSelectionOnClick
          getRowId={(row) => row._id}
          columns={columns}
          rowsPerPageOptions={[3]}
          pageSize={5}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          disableExtendRowFullWidth={true}
          components={{ Toolbar: QuickSearchToolbar }}
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
            },
          }}
        />
      </DataGridContainer>

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
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  MdAdd {
    color: black;
  }
`;
const Title = styled.h1``;
const DataGridContainer = styled.div`
  height: 500px;
  margin: 15px;
`;
