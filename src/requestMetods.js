import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const user = JSON.parse(localStorage.getItem("persist:root")).user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser.accessToken;
// console.log(user)
// const TOKEN=""
const local = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

let TOKEN ="";
if (local === null) {

  TOKEN = "";
} else {
  const usuario = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser;
  // console.log(usuario);
  TOKEN = usuario.accesToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
