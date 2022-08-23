const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.post("/", UserController.createUser);
router.get("/", UserController.getAllUser);
router.post("/ordenes/:_id", UserController.addProduct);
module.exports = router;
