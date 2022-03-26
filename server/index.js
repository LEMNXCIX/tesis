const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const cors = require("cors");

//? debe ir en este orden para evitar un error en el servidor
dotenv.config();
const stripeRoute = require("./routes/stripe");

//CONECCION CON LA BASE DE DATOS
//*La url de la coneccion esta en otro archivo .env para seguridad
//! el nombre de la base de datos se coloca en la url, al igual que el usuario y la contrasena
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Coneccion BD hecha"))
  .catch((err) => {
    console.log(err);
  });

//TEST
app.get("/api/test", () => {
  console.log("test hecho");
});

app.use(cors());
//ROUTAS QUE SE VAN A USAR
app.use(express.json()); //*Permite usar JSON en el proyecto
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", stripeRoute);

//LEVANTA EL SERVIDOR
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend esta vivo");
});
