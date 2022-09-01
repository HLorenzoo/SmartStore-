const User = require("../models/User");
class UserService {
  static async createUser(reqbody) {
    try {
      let user = new User(reqbody);
      return await user.save({ salt: 0 });
    } catch (error) {
      console.error("error existente en createUser- SERVICE", error.message);
    }
  }
  static async createCategory(userId, category) {
    try {
        return await User.findByIdAndUpdate(
            userId,
            {
                $addToSet: {
                    categories: { category },
                },
            },
            { new: true },
        );
    } catch (error) {
        console.error("error existente en createCategory- SERVICE", error.message);
    }
  }
  static async getAllUser() {
    try {
      let user = await User.find(
        { userStatus: true },
        { password: 0, salt: 0 }
      );
      return user;
    } catch (error) {
      console.error("error existente en getAllUser- SERVICE", error.message);
    }
  }
  static async addProduct(id, ordenes) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $push: {
            ordenes: ordenes,
          },
        },
        { new: true },
      );
    } catch (error) {
      console.error("error existente en addProduct- SERVICE", error.message);
    }
  }
  static async addToCart(userId, productId) { //Ok -findOrCreate-
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: {
            carrito: { productId },
          },
        },
        { new: true }
      );
      return user;
    } catch (error) {
      console.error("error existente en addToCart- SERVICE", error.message);
    }
  }
  static async deleteCart(userId, productId) { //Ok
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $pull: {
            carrito: { productId: productId },
          },
        },
        { new: true }
      );
      console.log(user);
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async deleteCartAll(userId) { //Ok
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          carrito: [],
        },   
        { new: true },
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async deleteUser(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { userStatus: false },
        { new: true },
      );
    } catch (error) {
      console.error("error existente en deleteUser- SERVICE", error.message);
    }
  }
  static async addFav(id, favoritos) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $addToSet: {
            favoritos,
          },
        },
        { new: true },
      );
    } catch (error) {
      console.error("error existente en addFav- SERVICE", error.message);
    }
  }
  static async deleteFav(_id, favorites) {
    try {
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: {
            favoritos: { id: favorites.id },
          },
        },
        { new: true }
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async addAdmin(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            isAdmin: true,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en addAdmin- SERVICE", error.message);
    }
  }
  static async deleteAdmin(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            isAdmin: false,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteAdmin- SERVICE", error.message);
    }
  }
  static async editUser(id, body) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            body,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteAdmin- SERVICE", error.message);
    }
  }
  static async editCategory(id, reqbody) {
    try {
        return await User.findByIdAndUpdate(
            id,
            {
                $set: {
                    name: reqbody.name,
                },
            },
            { new: true }
        );
    } catch (error) {
        console.error("error existente en editCategory- SERVICE", error.message);
    }
  }
  static async deleteCategory(id) {
    try {
        return await User.findByIdAndDelete(
            id,
        );
    } catch (error) {
        console.error("error existente en deleteCategory- SERVICE", error.message);
    }
  }
}

module.exports = UserService;
