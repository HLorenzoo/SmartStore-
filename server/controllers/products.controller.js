const ProductService = require("../service/product.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Product = require("../models/Products")

class ProductController {
  static async createProduct(req, res, next) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).send(product); 
    } catch (error) {
      next();
    }
  }

  static async getAllProduct(req, res, next) {
    try {
      const products = await ProductService.getAllProduct();
      products && res.status(200).send(products);
      products || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getProductByCategory(req, res, next) {
    try {
      const { category } = req.params;
      //console.log(category);
      const product = await ProductService.getProductByCategory(category);
      product && res.status(202).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { _id } = req.params;
      console.log(_id);
      const productUpdated = await ProductService.deleteProduct(_id);
      productUpdated && res.status(204).send("Producto Eliminado!");
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = ProductController;