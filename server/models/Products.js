const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Array,
        default: [],
    },
    reviews: {
        type: Array,
        default: [],
    },
    image: {
        type: Array,
        default: [],
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Product", Product);