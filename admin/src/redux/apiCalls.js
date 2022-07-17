import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest, userRequest } from "../requestMetods";
import {
  addProductFailure,
  addProductStart,
  addProductSucces,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSucces,
  getProductFailure,
  getProductStart,
  getProductSucces,
  updateProductFailure,
  updateProductStart,
  updateProductSucces,
} from "./productsRedux";

//* INICIO DE SESION
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest
      .post("/auth/login", user)
      .catch(function(error) {
        if (error.response) {
          mensajeApiCall = error.response.data;
        }
      });
    res.data.user.role > 1
      ? dispatch(loginSuccess(res.data))
      : (mensajeApiCall = {
          errors: ["No posees el permiso para acceder a este sitio"],
        });
  } catch (err) {
    dispatch(loginFailure());
  }
};

export let mensajeApiCall = "";
export const logout = async (dispatch) => {
  dispatch(logOut());
};

//TODO Corregir algunas partes del codigo
//?
//
//!
////
//* PRODUCTOS

//OBTENER LOS PRODUCTOS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product");
    dispatch(getProductSucces(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

//Borrar producto
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/product/${id}`);
    dispatch(deleteProductSucces(res.data));
    //dispatch(deleteProductSucces(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

//Actualizar Producto
export const updateProduct = async (id, product, dispatch) => {
  console.log(id)
  dispatch(updateProductStart());
  try {
    // update
    
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSucces(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

//Anadir Producto
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest
      .post(`/products`, product)
      .catch(function(error) {
        if (error.response) {
          mensajeApiCall = error.response.data;
        }
      });
    dispatch(addProductSucces(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
