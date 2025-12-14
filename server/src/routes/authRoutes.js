const express = require("express");
const router = express.Router();

const {
  signup,
  login,
} = require("../controllers/authController");

// routes for signup and login-->from authController.js
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
