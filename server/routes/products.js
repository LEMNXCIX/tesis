const router = require("express").Router();
const Products = require("../models/Products");
const {
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREAR PRODUCTOS
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Products(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ACTUALIZAR PRODUCTO
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCTO
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET TODOS LOS PRODUCTOS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategoria = req.query.categoria;
  try {
    let products;
    if (qNew) {
      products = await Products.find().sort({ createdAt: -1 }).limit(2);
    } else if (qCategoria) {
      products = await Products.find({
        categories: {
          $in: [qCategoria],
        },
      });
    } else {
      products = await Products.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//BORRAR PRODUCTO
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("El producto ha sido eliminado");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
