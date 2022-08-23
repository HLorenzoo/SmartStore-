const express = require("express");

console.log("holis");
const express = require("express");
const app = express();
const routes = require("./routes");
const volleyball = require("volleyball");

// conexion a db, cluster
const client = require("./config/db");

//enviroment
require("dotenv").config();

//middelware
app.use(express.json());
app.use(volleyball);
app.use(express.urlencoded({ extended: true }));

//modularizacion rutas
/*  app.use("/api", routes);  */

app.listen(process.env.PORT, () => {
  console.log("api working!...");
});
