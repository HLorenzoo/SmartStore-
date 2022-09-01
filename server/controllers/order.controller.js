const OrderService = require("../service/order.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class OrderController {
    static async createOrder(req, res, next) {
        console.log(req.body);
        try {
            const newOrder = await OrderService.createOrder(req.body);
            res.status(201).send(newOrder); 
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async getOrdersFromUser(req, res, next) {
        try {
            const { _id } = req.params;
            const orders = await OrderService.getOrdersFromUser(_id);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async getOrderToEmail(req, res, next) {
        try {
            const { _id } = req.params;
            const email = await OrderService.getOrderToEmail(_id);
            email && res.status(200).json(email);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async addToUser(req, res, next) {
        try {
            const { _id } = req.params;
            //const { productId } = req.body;//._id
            const userUpdated = await OrderService.addToUser(_id);
            userUpdated && res.status(202).send(userUpdated);
        } catch (error) {
            return res.status(500).json({ error });   
        }
    }
}

module.exports = OrderController;