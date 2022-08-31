const OrderService = require("../service/order.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class OrderController {
    static async createOrder(req, res, next) {
        try {
            const newOrder = await OrderService.createOrder(req.body);
            res.status(201).send(newOrder); 
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async getOrdersFromUser(req, res, next) {
        try {
            const { userId } = req.params;
            const orders = await OrderService.getOrdersFromUser(userId);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async getOrderToEmail(req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }

    static async addToUser(req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = OrderController;