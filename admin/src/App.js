import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  console.log(admin)
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      
      {admin && (
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
      {!admin && <>no eres admin, get out!, bitch...</>}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
