const Order = require("../models/Order");

class OrderService {
    static async createOrder(reqbody) {
        try {
            let order = new Order(reqbody);
            return await order.save({});
        } catch (error) {
            console.error("error existente en createOrder- SERVICE", error.message);
        }
    }

    static async getOdersFromUser(userId) {
        try {
            const orders = await Order.find(
                { userId: userId },
            )
            return orders;
        } catch (error) {
            console.error("error existente en getOrdersFromUser- SERVICE", error.message);
        }
    }

    static async getOrderToEmail() {
        try {
            
        } catch (error) {
            
        }
    }

    static async addToUser() {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = OrderService;