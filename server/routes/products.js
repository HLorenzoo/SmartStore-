const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");

//POST
router.post("/", ProductController.createProduct);//Ok
router.post("/cat", ProductController.createCategory);//Ok

//GET
router.get("/", ProductController.getAllProduct);//Ok
router.get("/:_id", ProductController.getProductById);//Ok
router.get("/name/:name", ProductController.getProductByName);//Ok
router.get("/cat/:category", ProductController.getProductByCategory);//Ok

//PUT
router.put("/edit/:_id", ProductController.editProduct);//Ok
router.put("/cat/edit/:_id", ProductController.editCategory);//Ok
router.put("/:_id", ProductController.deleteProduct);//Ok
router.put("/cat/:_id", ProductController.deleteCategory);//Ok

//CON PERSISTENCIA -ADMIN
//POST
//router.post("/", verifyTokenAdmin, ProductController.createProduct);
//router.post("/cat", verifyTokenAdmin, ProductController.createCategory);

//PUT
//router.put("/edit/:_id", verifyTokenAdmin, ProductController.editProduct);
//router.put("/cat/edit/:_id", verifyTokenAdmin, ProductController.editCategory);
//router.put("/:_id", verifyTokenAdmin, ProductController.deleteProduct);
//router.put("/cat/:_id", verifyTokenAdmin, ProductController.deleteCategory);

module.exports = router;