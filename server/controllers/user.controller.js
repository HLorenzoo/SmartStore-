const UserService = require("../service/user.service");
class UserController {
  static async createUser(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);

      user && res.status(201).send(user);
      user || res.sendStatus(500);
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
      next();
    }
  }
  static async addProduct(req, res, next) {
    try {
      const _id = req.params._id;
      console.log(_id, req.body.products);
      const userUpdated = await UserService.addProduct(_id, req.body.ordenes);
      userUpdated && res.status(202).send(userUpdated);
      userUpdated || res.sendStatus(500);
    } catch (error) {
      next();
    }
  }
}

module.exports = UserController;
