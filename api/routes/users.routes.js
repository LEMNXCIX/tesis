const express = require("express");
const authValidation = require("../middleware/auth.middleware");
const UserService = require("../services/users.services")
/**
 * Rutas para los usuarios ()
 * @param {*} app
 */
function users(app) {

  const userServ = new UserService()
  const router = express.Router();
  app.use("/api/users", router);

  //
  router.get("/", authValidation(2), async (req, res) => {
   const users = await userServ.getAll()
    return res.json({
      success: true,
      users
    });
  });
}

module.exports = users;
