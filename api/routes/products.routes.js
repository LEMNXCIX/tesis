const express = require("express");
const ProductsServices = require("../services/products.services");
const authMiddleware = require("../middleware/auth.middleware");

/**
 * Rutas de los productos
 * @param {express} app Recibe express del app.js
 */
function products(app) {
  const router = express.Router();
  const productsServ = new ProductsServices();

  app.use("/api/products", router);

  router.get("/", async (req, res) => {
    const result = await productsServ.getAll();
    return res.status(result.error ? 400 : 200).json(result);
  });

  router.post("/", authMiddleware(1), async (req, res) => {
    const result = await productsServ.create({
      ...req.body,
      owner: req.user.id,
    });
    console.log(result)
    return res.status(result.error ? 400 : 200).json(result);
  });
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const limit = isNaN(parseInt(req.query.limit))
      ? undefined
      : parseInt(req.query.limit);
    const page = isNaN(parseInt(req.query.page))
      ? undefined
      : parseInt(req.query.page);

    const result = await productsServ.getAllByUser(limit, page, id);

    return res.status(result.error ? 400 : 200).json(result);
  });

  router.get("/one/:id", async (req, res) => {
    const id = req.params.id;

    const result = await productsServ.getOne(id);
    return res.status(result.error ? 400 : 200).json(result);
  });

  router.delete("/:id", authMiddleware(1), async (req, res) => {
    const result = await productsServ.delete(req.params.id, req.user.id);

    return res.status(result.success ? 200 : 403).json(result);
  });
}
module.exports = products;
