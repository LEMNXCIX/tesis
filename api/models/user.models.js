const { mongoose } = require("../config/db.config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    minlength: [3, "No menor a 3 caracteres"],
    maxlength: [100, "No mayor a 100 caracteres"],
    trim: true, 
    //Quita lso espacios antes o despues de la palabra " hola" / "hola " / " hola " = "hola"
  },
  email: {
    type: String,
    required: [true, "El email es requerido"],
    trim: true,
    unique: [true, "Email ya registrado"],
    match: [/^[\w\.-]+@[\w]+\.[\.\w]+$/, "Email no valido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  role: {
    type: Number,
    default: 1,
  },
  profilePic: String,
  provider: {
    local: Boolean,
    facebook: Boolean,
    google: Boolean,
    twitter: Boolean,
    github: Boolean,
  },
  idProvider: {
    facebook: String,
    google: String,
    twitter: String,
    github: String,
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
