const Order = require("../models/Order");
const User = require("../models/User");

class OrderService {
    static async createOrder(reqbody) { //Ok
        try {
            const order = new Order(reqbody);
            return await order.save({});
        } catch (error) {
            console.error("error existente en createOrder- SERVICE", error.message);
        }
    }

    static async getOdersFromUser(userId) {
        try {
            const orders = await User.find(
                { _id: userId },
                { ordenes },
            );
            return orders;
        } catch (error) {
            console.error("error existente en getOrdersFromUser- SERVICE", error.message);
        }
    }

    static async getOrderToEmail(userId) {
        try {
            const email = await User.find(
                { userId },
                //{ email },
            );
            console.log(email._id)
            return email;
        } catch (error) {
            console.error("error existente en getOrderToEmail- SERVICE", error.message);
        }
    }

    static async addToUser(userId) {
        try {
            const order = await Order.find(
                { userId },
            );
            console.log(order);
/*             const user = await User.findOneAndUpdate(
                {userId},
                {
                    $addToSet: {
                        ordenes: { orderId: orderId._id },
                    },
                },
                { new: user },
            );
            return user; */
           return order;
        } catch (error) {
            console.error("error existente en addToUser- SERVICE", error.message);
        }
    }
}

module.exports = OrderService;