import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { Announcement } from "./components/Announcement";

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
      <Announcement
        text={"Esta es una version aun en desarrollo"}
        close={false}
        color={"#000"}
      />
      <Navbar user={user} />
      <Announcement />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productos/:categoria" element={<ProductList />} />
        <Route exact path="/productos/" element={<Products />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/login"
          element={user ? <Redirect to="/" /> : <Login />}
        />

        <Route
          exact
          path="/registro"
          element={user ? <Redirect to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};
