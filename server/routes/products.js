const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products.controller");
//const { verifyTokenAdmin } = require("../middelware/auth.middelware");

router.post("/createProduct", ProductController.createProduct);


router.get("/", ProductController.getAllProduct);
router.get("/showBycategory", ProductController.getProductByCategory);

router.put("/admin/deleteProduct/:_id", ProductController.deleteProduct);
module.exports = router;