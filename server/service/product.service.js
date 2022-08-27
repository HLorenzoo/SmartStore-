const Product = require("../models/Products");

class ProductService {
    static async createProduct(reqbody) {
        try {
            let product = new Product(reqbody);
            return await product.save( { } );
        } catch (error) {
            console.error("error existente en createProduct- SERVICE", error.message);
        }
    }

    static async getAllProduct() {
        try {
            let product = await Product.find(
                { unique: true },
            );
            return product;
        } catch (error) {
            console.error("error existente en getAllProduct- SERVICE", error.message);
        }
    }

    static async getProductByCategory(categoria) {
        try {
            let product = await Product.find(
                //{category: categoria},
                //{ unique: true},
                { category : categoria},
            );
            return product;
        } catch (error) {
            console.error("error existente en getAllProductByCategory- SERVICE", error.message);
        }
    }

    static async deleteProduct(id) {
        try {
            return await Product.findByIdAndUpdate(
                id,
                { unique: true },
            );
        } catch (error) {
            console.error("error existente en deleteProduct- SERVICE", error.message);
        }
    }
}

module.exports = ProductService;