const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products.controller");
const { verifyToken, verifyTokenAdmin } = require("../middelware/auth.middelware");

//POST
router.post("/", ProductController.createProduct);
router.post("/review", ProductController.addReview); //ADD REVIEW
router.post("/qualify", ProductController.addQualification) //ADD QUALIFICATION

//GET
router.get("/", ProductController.getAllProduct);
router.get("/:_id", ProductController.getProductById);
router.get("/name/:name", ProductController.getProductByName);
router.get("/cat/:category", ProductController.getProductByCategory);
router.get("/cat/show", ProductController.getAllCategories);

//PUT
router.put("/edit/:_id", ProductController.editProduct);
router.put("/delete/:_id", ProductController.deleteProduct);

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