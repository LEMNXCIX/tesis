const { mongoose } = require("../config/db.config");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre es requerido"],
    trim: true,
    unique: [true, "Ya existe un producto registrado con ese nombre"],
  },
  description: {
    type: String,
    required: [true, "La descripción es requerida"],
  },
  price: {
    type: Number,
    required: [true, "El precio es requerido"],
  },
  image: {
    type: [String],
    required: [true, "La imagen es requerida"],
  },
  stock: {
    type: Number,
    required: [true, "El stock es requerido"],
  },
  //TODO: agregar un array de categorias
  //TODO: agregar un estado
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
