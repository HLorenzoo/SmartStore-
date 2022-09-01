const mongoose = require("mongoose");
require("dotenv").config();

const client = mongoose
  .connect("mongodb+srv://SMART:SMART@cluster0.lje0d28.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Succesfully db connected"))
  .catch((err) => console.error(err));

module.exports = client;
