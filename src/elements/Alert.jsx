import React from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

export const Alert = ({ open, setOpen }) => {
  //const [open, setOpen] = React.useState(false);
  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        Cerrar
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" color="secondary" />
      </IconButton>
    </React.Fragment>
  );
  const mesajeRedux = useSelector((state) => state.user.message);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={mesajeRedux}
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      TransitionComponent={TransitionUp}
    />
  );
};
