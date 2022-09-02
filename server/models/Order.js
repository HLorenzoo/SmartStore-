const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    products: { //Objeto Producto
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