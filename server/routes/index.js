const express = require("express");
const router = express.Router();
const user = require("./user");
const orders = require("./orders");
const products = require("./products");
const cart = require("./cart");

//enrutamiento

router.use("/user", user);
router.use("/orders", orders);
router.use("/products", products);
router.use("/cart", cart);

module.exports = router;
