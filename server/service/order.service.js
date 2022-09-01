const Order = require("../models/Order");
const User = require("../models/User");

class OrderService {
    static async createOrder(userId, reqbody) { //Ok
        try {
            const order = new Order(reqbody); //Crear orden
            await order.save({});
            // colocar esa orden en el Array del usuario (addToUser)
            const orderId = JSON.stringify(order._id);
            return await User.findOneAndUpdate(
                { userId },
                {
                    $addToSet: {
                        ordenes: { orderId: orderId },
                    },
                },
            );
        } catch (error) {
            console.error("error existente en createOrder- SERVICE", error.message);
        }
    }

///-- RUTA NORMAL SIN INTREGAR CON addToUser() --///
/*     static async createOrder(userId, reqbody) { //Ok
        try {
            const order = new Order(reqbody);
            return await order.save({});
        } catch (error) {
            console.error("error existente en createOrder- SERVICE", error.message);
        }
    } */

    static async getOrdersFromUser(userId) { //Ok
        try {
            const orders = await Order.find(
                { userId },
            );
            return orders;
        } catch (error) {
            console.error("error existente en getOrdersFromUser- SERVICE", error.message);
        }
    }

/*     static async getOrderToEmail(userId) {
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
    } */

///-- RUTA NORMAL SIN INTREGAR CON createOrder() --///
/*     static async addToUser(userId, orderId) {
        try {
            return await User.findOneAndUpdate(
                { userId },
                {
                    $addToSet: {
                        ordenes: { orderId: orderId },
                    },
                },
            );
        } catch (error) {
            console.error("error existente en addToUser- SERVICE", error.message);
        }
    } */
}

module.exports = OrderService;