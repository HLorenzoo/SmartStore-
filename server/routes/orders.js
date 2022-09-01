const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/order.controller");

//POST
router.post("/", OrderController.createOrder); //cartCheckout

//GET
router.get("/email/:_id", OrderController.getOrderToEmail); //payConfirmed
router.get("/:_id", OrderController.getOrdersFromUser);

//PUT
router.put("/add/:_id", OrderController.addToUser); //confirmPayment

module.exports = router;