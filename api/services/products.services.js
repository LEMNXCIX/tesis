const ProductsModel = require("../models/products.models");
const dbError = require("../helpers/dbError.helpers");

class Products {
  /**
   * Obtener todos los productos
   * @returns Objeto con todos los productos
   */
  async getAll() {
    try {
      const products = await ProductsModel.find();
      return products;
    } catch (error) {
      return {
        error: true,
        message,
      };
    }
  }

  /**
   * Crear nuevo producto
   * @param {Object} data Datos del producto
   * @returns Objeto con el producto creado
   */
  async create(data) {
    try {
      const products = await ProductsModel.create(data);
      return products;
    } catch (error) {
     return dbError(error);
    }
  }
}
module.exports = Products;
