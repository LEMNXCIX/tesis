import { DataGrid, esES } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Close, Search } from "@mui/icons-material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

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
        placeholder="Búsqueda"
        InputProps={{
          startAdornment: <Search fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <Close fontSize="small" />
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

export const DatagridElement = ({ data, columns }) => {
  //FUNCION  DE BUSQUEDA EN EL DATA GRID - fin
  //ELEMENTOS  DE BUSQUEDA EN EL DATA GRID
  const [searchText, setSearchText] = useState();
  const [rows, setRows] = useState([]);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <Container>
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        rowsPerPageOptions={[7]}
        pageSize={[6]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        disableExtendRowFullWidth={true}
        components={{ Toolbar: QuickSearchToolbar }}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (e) => requestSearch(e.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </Container>
  );
};
const Container = styled.div`
  width: 55vw;
  height:70vh;
  margin: 15px;
`;
