const CartModel = require("../models/cart.models");

class Cart {
  /**
   * Obtener productos del carrito
   * @param {ObjectType} idUser Id del usuario del carrito
   * @returns Objeto con los productos del carrito
   */
  async getItems(idUser) {
    const result = await CartModel.findById(idUser).populate(
      "items._id",
      "name price images"
    );
    console.log(result);
    const products = result.items.map((product) => {
      return {
        ...product._id?._doc,
        amount: product.amount,
      };
    });
    return products;
  }

  /**
   * Anadir productos al carrito
   * @param {} idUser Id del usuario
   * @param {*} idProduct
   * @param {int} amount Total de los prosuctos del carrito
   * @returns Carrito actualizado con los nuevos productos
   */
  async addToCart(idUser, idProduct, amount) {
    const result = await CartModel.findByIdAndUpdate(
      idUser,
      {
        $push: {
          items: {
            _id: idProduct,
            amount,
          },
        },
      },
      { new: true }
    ).populate("items._id", "name price images");
    const products = result.items.map((product) => {
      return {
        ...product._id?._doc,
        amount: product.amount,
      };
    });
    return products;
  }

  /**
   * Crear carrito de compras
   * @param {*} idUser Id del usuario
   * @returns Objeto del carrrito creado
   */
  async create(idUser) {
    const cart = await CartModel.create({
      _id: idUser,
      items: [],
    });
    return cart;
  }
  async removeFromCart(idUser, idProduct) {
    const result = await CartModel.findByIdAndUpdate(
      idUser,
      {
        $pull: {
          items: {
            _id: idProduct,
          },
        },
      },
      { new: true }
    ).populate("items._id", "name price images");
    const products = result.items.map((product) => {
      return {
        ...product._id?._doc,
        amount: product.amount,
      };
    });
    return products;
  }
  async changeAmount(idUser, idProduct, amount) {
    const result = await CartModel.findOneAndUpdate(
      { _id: idUser },
      { $set: { "items.$[el].amount": amount } },
      {
        arrayFilters: [{ "el._id": idProduct }],
        new: true,
      }
    ).populate("items._id", "name price images");

    const products = result.items.map((product) => {
      return {
        ...product._id?._doc,
        amount: product.amount,
      };
    });

    return products;
  }
  async clearCart(stripeCustomerID) {
    const user = await UserModel.findOne({ stripeCustomerID });
    const cart = await CartModel.findByIdAndUpdate(
      user.id,
      {
        items: [],
      },
      { new: true }
    );

    return cart;
  }
}
module.exports = Cart;
