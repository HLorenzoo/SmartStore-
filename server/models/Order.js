const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    orderState: {
        type: String,
        defaul: "pending",
    },
},
    { timestamps: true },
);

module.exports = mongoose.model("Order", OrderSchema);