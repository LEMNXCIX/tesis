const express = require("express");
const CartService = require("../services/cart.services");
const authMiddleware = require("../middleware/auth.middleware");

/**
 * Todas las rutas del carrito
 * @param {*} app Express
 */
function cart(app) {
  const router = express.Router();
  const cartServ = new CartService();

  app.use("/api/cart", router);
  

  //Obtener los productos del carrito
  router.get("/", authMiddleware(1), async (req, res) => {
    const result = await cartServ.getItems(req.user.id);
    return res.status(result.error ? 400 : 200).json(result);
  });

  //Anadir productos al carrito
  router.post("/add", authMiddleware(1), async (req, res) => {
    const { idProduct, amount } = req.body;
    const result = await cartServ.addToCart(req.user.id, idProduct, amount);
    return res.status(result.error ? 400 : 200).json(result);
  });
}
module.exports = cart;
