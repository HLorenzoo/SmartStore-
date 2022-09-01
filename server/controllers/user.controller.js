const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
class UserController {
  static async createUser(req, res, next) {
    try {
        const user = await UserService.createUser(req.body);
        user && res.status(201).send(user);
        user || res.sendStatus(404);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }
  static async createCategory(req, res, next) {
    try {
      const { _id } = req.params;
      const { category } = req.body;
      const cat = await ProductService.createCategory(_id, category);
      res.status(201).send(cat);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async getAllUser(req, res, next) {
    try {
      const users = await UserService.getAllUser();
      users && res.status(200).send(users);
      users || res.sendStatus(404);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async addProduct(req, res, next) {
    try {
      const { _id } = req.params;
      const { ordenes } = req.body;
      if (ordenes) {
        const userUpdated = await UserService.addProduct(_id, ordenes);
        res.status(202).send(userUpdated);
      }
      res.sendStatus(404);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async addToCart(req, res, next) {
    try {
      const { _id } = req.params;
      const { productId } = req.body;//._id
      const userUpdated = await UserService.addToCart(_id, productId);
      userUpdated && res.status(202).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async deleteCart(req, res, next) {
    try {
      const { _id }= req.params;
      const { productId } = req.body;//._id
      const userUpdated = await UserService.deleteCart(_id, productId);
      res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async deleteCartAll(req, res, next) {
    try {
      const { _id }= req.params; 
      const userUpdated = await UserService.deleteCart(_id);
      res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.deleteUser(_id);
      userUpdated && res.status(204).send("Usuario Eliminado!.");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async addFav(req, res, next) {
    try {
      const { _id } = req.params;
      const { favoritos } = req.body;
      if (favoritos) {
        const userUpdated = await UserService.addFav(_id, favoritos);
        userUpdated && res.status(202).send(userUpdated);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async deleteFav(req, res, next) {
    try {
      const _id = req.params._id;
      const userUpdated = await UserService.deleteFav(_id, req.body.favorites);
      res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async addAdmin(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.addAdmin(_id);
      userUpdated && res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async deleteAdmin(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.deleteAdmin(_id);
      userUpdated && res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async editUser(req, res, next) {
    try {
      const { _id } = req.params;
      const userUpdated = await UserService.deleteAdmin(_id, req.body);
      userUpdated && res.status(202).send(userUpdated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async editCategory(req, res, next) {
    try {
      const { _id } = req.params;
      const categoryUpdated = await ProductService.editCategory(_id, req.body);
      categoryUpdated && res.status(202).send(categoryUpdated);
      categoryUpdated || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const { _id } = req.params;
      console.log(_id);
      const categoryUpdated = await ProductService.deleteCategory(_id);
      categoryUpdated && res.status(204).send("Categoria Eliminada!"); 
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
