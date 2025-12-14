const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { getUserFeed } = require("../controllers/feedController");

router.get("/", auth, getUserFeed);

module.exports = router;
