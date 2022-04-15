const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTRO DEL USUARIO

router.post("/register", async (req, res) => {
  const newUser = new User({
    //*se crea el usuario en base al modelo User, aqui se toman los datos desde el formulario
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  //GUARDAR EL USUARIO

  //* async se usa para realizar pocesos asincronos que no se realizan inmediatamnete debido al tiempo de respuesta de los servidores o a la coneccion de internet del usario, en este caso y el await se usa para esperar a que el proceso asincrono se realice y despues ejecutarse mas o memos
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//INICIO DE SESION

router.post("/login", async (req, res) => {
  if (req.body.username !== "" && req.body.password !== "") {
    // console.log("esta vacio");
    try {
      const user = await User.findOne({ username: req.body.username });
      //?condicion
      !user && res.status(401).json("No se encontro el usuario"); //Si no se encuetra el usuario en la BD se envia esta respuesta

      //*Se decodifica la contrasenia
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SECRET
      );
      const passwordAuth = hashedPassword.toString(CryptoJS.enc.Utf8);
      //?condicion
      passwordAuth !== req.body.password &&
        res.status(401).json("Contrasenia incorecta");
      //JWT se usa para verificar que la infoemacion mostrada pertenesca al usuario actual es decir para mantener la integridad de los datos
      const accesToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_KEY,
        { expiresIn: "3d" } //?El token solamente dura tres dias, despues de ese plazo se requiere iniciar sesion de nuevo
      );

      //*Se usa para desectrucurar la informacion, es decir que va a separar la informacion en este caso separa la contrasenas de users y en others se almacenan las demas
      //?password debe ser igual a la variable del modelo que se recoge del formulario
      const { password, ...others } = user._doc; //se debe poner ._doc para que se genere sin problemas

      res.status(200).json({ ...others, accesToken, mensaje: "Se ha inicidao correctamente" });
    } catch (err) {
      // res.status(500).json(err);
    }
  } else {
    res.status(401).json("Los campos estan vacios");
  }
});

module.exports = router;
