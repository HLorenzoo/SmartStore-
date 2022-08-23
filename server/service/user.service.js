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
  static async getAllUser(reqbody) {
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
          $addToSet: {
            ordenes: ordenes,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en addProduct- SERVICE", error.message);
    }
  }
}

module.exports = UserService;
