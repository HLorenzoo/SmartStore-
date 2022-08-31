const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
    orderState: {
        type: String,
        defaul: "pending",
    },
    totalAmount: {
        type: Number,
        required: true,
    },
},
    { timestamps: true },
);

module.exports = mongoose.model("Order", OrderSchema);