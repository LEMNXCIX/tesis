import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest } from "../requestMetods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest
      .post("/auth/login", user)
      .catch(function(error) {
        if (error.response) {
          // console.log(error.response.data);
          mensajeError = error.response.data;
        }
      });
    // console.log(res.data.mensaje);
    mensajeApiCall = "Se ha iniciado sesión";
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  mensajeApiCall = "Se cerro sesión";
  // console.log("cerrar sesion");
  dispatch(logOut());
};
export let mensajeApiCall;
export let mensajeError = "";
