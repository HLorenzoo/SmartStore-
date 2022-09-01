const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: Array,
        default: [],
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    reviews: {
        type: Array,
        default: [],
    },
},
    { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
