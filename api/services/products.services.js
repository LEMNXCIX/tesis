const ProductsModel = require("../models/products.models");

class Products {
  /**
   * Obtener todos los productos
   * @returns Objeto con todos los productos
   */
  async getAll() {
    const products = await ProductsModel.find();
    return products;
  }

  /**
   * Crear nuevo producto
   * @param {Object} data Datos del producto
   * @returns Objeto con el producto creado
   */
  async create(data) {
    const products = await ProductsModel.create(data);
    return products;
  }
}
module.exports = Products;
