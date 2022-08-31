const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");
//GET
router.get("/:_id", UserController.findOneUser);

//POST
router.post("/", UserController.createUser);
router.post("/ordenes/:_id", UserController.addProduct);
router.post("/favoritos/:_id", UserController.addFav);

// --- DEBERIA SER DE ADMIN
//GET
router.get("/", verifyTokenAdmin, UserController.getAllUser);

//PUT
router.put("/:_id", verifyTokenAdmin, UserController.deleteUser);
router.put("/admin/:_id", verifyTokenAdmin, UserController.addAdmin);
router.put("/dadmin/:_id", verifyTokenAdmin, UserController.deleteAdmin);
module.exports = router;
