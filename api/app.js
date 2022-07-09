const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const { port, sesionSecret } = require("./config/index.config");
const { connection } = require("./config/db.config");
const passport = require("passport");
const cors = require("cors");

//Rutas
const auth = require("./routes/auth.routes");
const users = require("./routes/users.routes");
const products = require("./routes/products.routes");
const cart = require("./routes/cart.routes");
const {
  useGoogleStrategy,
  useFacebookStrategy,
  useTwitterStrategy,
  useGitHubStrategy,
} = require("./middleware/authProvider.middleware");

const app = express();

connection();

//Cookies

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookie());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:5500"],
    credentials: true,
  })
);
app.use(
  session({
    secret: sesionSecret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());

//Usando estretegias de passport para el Login
passport.use(useGoogleStrategy());
passport.use(useFacebookStrategy());
passport.use(useGitHubStrategy());
passport.use(useTwitterStrategy());

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

//Usando las rutas
auth(app);
users(app);
products(app);
cart(app);

//Ruta inicial del servidor
app.get("/", (req, res) => {
  return res.json({
    name: "Ecommerce",
  });
});

//Levantar el servidor
app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});
