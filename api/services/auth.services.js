const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/index.config");
const User = require("./users.services");

class Auth {
  async login(data) {
    const re = /^[\w\.-]+@[\w]+\.[\.\w]+$/
    console.log(data)
    const { email, password } = data;
    if (password == "") {
      return {
        success: false,
        errors: ["Ingrese la contraseña"],
      };
    }
    if(!re.test(email)){
      return {
        success: false,
        errors: ["Ingrese un correo electrónico valido"],
      };
    }
    if (email == "") {
      return {
        success: false,
        errors: ["Ingrese el correo electrónico"],
      };
    }
    const userServ = new User();
    const user = await userServ.getByEmail(email);

    if (user && (await this.#compare(password, user.password))) {
      return this.#getUserData(user);
    }

    return {
      success: false,
      errors: ["Las credenciales son incorrectas"],
    };
  }

  async signup(data) {
    if (data && data.password) {
      data.password = await this.#encrypt(data.password);
    }
    data.provider = {
      local: true,
    };

    const userServ = new User();
    const result = await userServ.create(data);
    if (!result.created) {
      return {
        success: false,
        errors: result.errors,
      };
    }

    return this.#getUserData(result.user);
  }

  async socialLogin(data) {
    const userServ = new User();
    const user = {
      idProvider: data.id,
      name: data.displayName,
      email: data.emails[0].value,
      profilePic: data.photos[0].value,
      provider: data.provider,
    };
    const result = await userServ.getOrCreateByProvider(user);

    if (!result.created) {
      // Verificar si el correo está en uso
      return {
        success: false,
        errors: result.errors,
      };
    }

    return this.#getUserData(result.user);
  }

  #getUserData(user) {
    const userData = {
      role: user.role,
      name: user.name,
      email: user.email,
      provider: user.provider,
      idProvider: user.idProvider,
      id: user.id,
    };

    const token = this.#createToken(userData);
    return {
      success: true,
      user: userData,
      token,
    };
  }

  #createToken(payload) {
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "7d",
    });
    return token;
  }

  async #encrypt(string) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(string, salt);

      return hash;
    } catch (error) {
      console.log(error);
    }
  }

  async #compare(string, hash) {
    try {
      return await bcrypt.compare(string, hash);
    } catch (error) {
      return false;
    }
  }
}

module.exports = Auth;
