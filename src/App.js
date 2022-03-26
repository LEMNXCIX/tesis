import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

export const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/productos/:categoria" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/producto/:id" element={<Product />} />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/login"
          element={user ? <Redirect to="/" /> : <Login />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/registro"
          element={user ? <Redirect to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};
