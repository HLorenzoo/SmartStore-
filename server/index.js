const express = require("express");
const app = express();
const routes = require("./routes");
const volleyball = require("volleyball");
const cors = require("cors");

// conexion a db, cluster
const client = require("./config/db");
const cookieparser = require("cookie-parser");

//enviroment
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(volleyball);
app.use(express.urlencoded({ extended: true }));

//modularizacion rutas
 app.use("/api", routes); 

app.listen(process.env.PORT, () => {
  console.log("api working!...");
});
