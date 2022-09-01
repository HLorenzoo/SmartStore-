const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const AuthController = require("../controllers/auth.controller");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { verifyToken } = require("../middelware/auth.middelware");

//POST
router.post("/signup", AuthController.register);
router.post("/login", AuthController.signIn);
router.post("/logout", AuthController.logOut);

//GET
//router.get("/me", verifyToken, (req, res) => res.send(req.user));
router.get("/me", verifyToken);

module.exports = router;
