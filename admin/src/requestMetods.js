import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const usuario =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

let TOKEN
if(usuario === null){
  console.log("No hay usuario")
  TOKEN =""
} else{

   TOKEN = usuario.accesToken;
}
//usuario === "null" ? TOKEN ="" : TOKEN = usuario;
//console.log(JSON.parse(localStorage.getItem("persist:root")).user)
//const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accesToken;
//const TOKEN ="asd"
//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user))
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
