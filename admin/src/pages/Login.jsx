import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, mensajeApiCall } from "../redux/apiCalls";
console.log(mensajeApiCall.errors)
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  console.log(mensajeApiCall.errors)
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="Nombre de usuario"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="Contrasenia"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
      {error &&  <Error>{mensajeApiCall.errors}</Error>

      }
    
    </div>
  );
};
const Error = styled.span`
margin-top: 10px;
  color: red;
  text-align: center;
  background-color: #ff00003b;
  border-radius: 4px;
  padding: 10px;
`;

export default Login;