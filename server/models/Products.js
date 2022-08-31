const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
    categories: {
        type: Array,
        default: [],
    },
    marca: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
},
    { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
