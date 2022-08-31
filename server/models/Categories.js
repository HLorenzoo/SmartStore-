const mongoose = require("mongoose");

const Category = new mongoose.Schema({
    category: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("Category", Category);