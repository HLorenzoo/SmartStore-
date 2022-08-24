const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

//GET
router.get("/", UserController.getAllUser);

//POST
router.post("/ordenes/:_id", UserController.addProduct);
router.post("/favoritos/:_id", UserController.addFav);

//PUT
router.put("/:_id", UserController.deleteUser);

module.exports = router;
