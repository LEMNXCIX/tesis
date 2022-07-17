import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
let TOKEN ="";
const user = localStorage.getItem("persist:root");
if(user !== null){

  const local = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
  
  if (local == null) {
  
    TOKEN = "";
  } else {
    const usuario = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser;
    // console.log(usuario);
    TOKEN = usuario.accesToken;
  }
}
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser.accessToken;
// console.log(user)
// const TOKEN=""


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
