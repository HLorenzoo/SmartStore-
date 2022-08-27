const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");
//POST
router.post("/ordenes/:_id", UserController.addProduct);
router.post("/favoritos/:_id", UserController.addFav);
router.post("/", UserController.createUser);
// --- DEBERIA SER DE ADMIN
//GET
router.get("/", UserController.getAllUser);
router.get("/findUser/:_id", UserController.findOneUser);
//PUT
router.put("/deleteUser/:_id", verifyTokenAdmin, UserController.deleteUser);
router.put("/admin/:_id", UserController.addAdmin);
router.put("/dadmin/:_id", UserController.deleteAdmin);
module.exports = router;