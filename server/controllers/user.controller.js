const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User")
class UserController {
  static async createUser(req, res, next) {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).send(user);
    } catch (error) {
        next();
    }
  }
  static async getAllUser(req, res, next) {
    try {
      const users = await UserService.getAllUser();

      users && res.status(200).send(users);
      users || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
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
      return res.status(500).json({ error });
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const { _id } = req.params;
      console.log(_id);
      const userUpdated = await UserService.deleteUser(_id);
      userUpdated && res.status(204).send("Usuario Eliminado!.");
    } catch (error) {
      return res.status(500).json({ error });
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
      return res.status(500).json({ error });
    }
  }
  static async addAdmin(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.addAdmin(_id);
      userUpdated && res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async deleteAdmin(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.deleteAdmin(_id);
      console.log(userUpdated);
      userUpdated && res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async editUser(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.deleteAdmin(_id, req.body);
      console.log(userUpdated);
      userUpdated && res.status(202).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async findOneUser(req, res, next) {
    try {
      const { _id } = req.params;
      const user = await User.findById(_id);
      user && res.status(202).send(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = UserController;