import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";

import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { UserList } from "./components/UserList";
import { Home } from "./pages/Home";
import { NewProduct } from "./pages/NewProduct";
import { NewUser } from "./pages/NewUser";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { User } from "./pages/User";
import Login from "./pages/Login.jsx";
import { useSelector } from "react-redux";
// import { useEffect } from "react";

// function Redirect({ to }) {
//   let navigate = useNavigate();
//   useEffect(() => {
//     navigate(to);
//   });
//   return null;
// }

function App() {
  const usuario = useSelector((state) => state.user);

  // console.log(admin)
  usuario.currentUser === null ? console.log("vacio") : console.log("no vacio");
  return (
    <Router>
      {usuario.currentUser === null ? (
        <>
          <Login />
        </>
      ) : (
        <>
          {usuario.currentUser.isAdmin}
          <Topbar />
          <Container>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/usuarios" element={<UserList />} />
              <Route path="/user" element={<User />} />
              <Route exact path="/nuevoUsuario" element={<NewUser />} />
              <Route exact path="/productos" element={<ProductList />} />
              <Route path="/producto/:productId" element={<Product />} />
              <Route exact path="/nuevoProducto" element={<NewProduct />} />
            </Routes>
          </Container>
        </>
      )}

      {/* {admin && (
        <>
          <Topbar />
          <Container>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/usuarios" element={<UserList />} />
              <Route  path="/user" element={<User />} />
              <Route exact path="/nuevoUsuario" element={<NewUser />} />
              <Route exact path="/productos" element={<ProductList />} />
              <Route  path="/producto/:productId" element={<Product />} />
              <Route exact path="/nuevoProducto" element={<NewProduct />} />
            </Routes>
          </Container>
        </>
      )}
    {!admin && <>no eres admin, get out!, bitch...</>} */}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
