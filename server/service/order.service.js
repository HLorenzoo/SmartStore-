const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Products");

class OrderService {
    static async createOrder(userId, reqbody) { //CHECKOUT (1 SOLO CLICK HACE TODO)
        try {
            const user = await User.findById(
                userId,
            ).select({ username: 1 });
            let nameUser = JSON.stringify(user.username); //Obtengo el 'username'

            let order = new Order(reqbody); //createOrder
            await order.save({});
        
            order = await Order.findByIdAndUpdate(
                reqbody.products[2], //acá debeía Mapear el array de reqbody
                {
                    $addToSet: {
                        userName: nameUser,
                    }
                }
            )
            
            console.log(order)

            // ACÁ DEBE OBTENERSE EL OBJETO PRODUCTO Y PUSHEARLO AL MODELO ORDEN //
            
            // ADD TO USER
            return await User.findByIdAndUpdate(
                userId,
                {
                    $addToSet: {
                        ordenes: order,
                    },
                },
            );
        } catch (error) {
            console.error("error existente en createOrder- SERVICE", error.message);
        }
    }

///-- RUTA createOrder SIN INTREGAR CON addToUser() --///
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

///-- RUTA confirmPayment SIN INTREGAR CON createOrder() --///
/*     static async addToUser(userId, orderId) {
        try {
            return await User.findByIdAndUpdate(
                userId,
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