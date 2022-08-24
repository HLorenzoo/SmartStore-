const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");
//POST
router.post("/ordenes/:_id", UserController.addProduct);
router.post("/favoritos/:_id", UserController.addFav);

// --- DEBERIA SER DE ADMIN
//GET
router.get("/", verifyTokenAdmin, UserController.getAllUser);

//PUT
router.put("/:_id", verifyTokenAdmin, UserController.deleteUser);

module.exports = router;
