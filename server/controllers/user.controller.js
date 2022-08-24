const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class UserController {
  static async getAllUser(req, res, next) {
    try {
      const users = await UserService.getAllUser();

      users && res.status(200).send(users);
      users || res.sendStatus(500);
    } catch (error) {
      next();
    }
  }
  static async addProduct(req, res, next) {
    try {
      const { _id } = req.params;
      const { ordenes } = req.body;
      if (ordenes) {
        console.log(_id, ordenes);
        const userUpdated = await UserService.addProduct(_id, ordenes);
        res.status(202).send(userUpdated);
      }
      res.sendStatus(404);
    } catch (error) {
      next();
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const { _id } = req.params;
      console.log(_id);
      const userUpdated = await UserService.deleteUser(_id);
      userUpdated && res.status(204).send("Usuario Eliminado!.");
      userUpdated || res.sendStatus(500);
    } catch (error) {
      next();
    }
  }
  static async addFav(req, res, next) {
    try {
      const { _id } = req.params;
      const { favoritos } = req.body;
      if (favoritos) {
        console.log(_id, favoritos);
        const userUpdated = await UserService.addProduct(_id, favoritos);
        userUpdated && res.status(202).send(userUpdated);
      }
      res.sendStatus(500);
    } catch (error) {
      next();
    }
  }
}

module.exports = UserController;
