const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/order.controller");

//POST
router.post("/:_id", OrderController.createOrder); //cartCheckout -Ok

//GET
//router.get("/email/:_id", OrderController.getOrderToEmail); //payConfirmed
router.get("/:_id", OrderController.getOrdersFromUser); //-Ok

//PUT
//router.put("/add/:_id", OrderController.addToUser); //confirmPayment 

module.exports = router;