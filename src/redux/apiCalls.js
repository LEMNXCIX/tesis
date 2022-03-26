import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest } from "../requestMetods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user).catch(function(error){
      if(error.response){
        console.log(error.response.data)
        mensajeApiCall = error.response.data;
      }
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    
  }
};
export let mensajeApiCall = "";
export const logout = async (dispatch)=>{
  dispatch(logOut());
}