const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");

router.post("/", ProductController.createProduct);//Ok

router.get("/", ProductController.getAllProduct);//Ok
router.get("/:category", ProductController.getProductByCategory);//Ok

//router.put("/admin/deleteProduct/:_id", ProductController.deleteProduct);
router.put("/:_id", ProductController.deleteProduct);
module.exports = router;