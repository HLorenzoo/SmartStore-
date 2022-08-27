const ProductService = require("../service/product.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
      const { category } = req.body;
      console.log(category);
      if (category) {
        productUpdated = await ProductService.getProductByCategory(category);
        productUpdated && res.status(202).send(productUpdated);
      }
      res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { _id } = req.params;
      const productUpdated = await ProductService.deleteProduct(_id);
      productUpdated && res.status(200).send(productUpdated);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = ProductController;