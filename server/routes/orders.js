const express = require('express')
const router = express.Router()
const OrderController = require("../controllers/order.controller");

//POST
router.post("/", OrderController.createOrder);

//GET
router.get("/orders/:_id", OrderController.getOrdersFromUser);
router.get("/", OrderController.getOrderToEmail);

//PUT
router.put("/add/:_id", OrderController.addToUser);

module.exports = router;