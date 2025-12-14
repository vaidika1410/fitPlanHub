const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");

const { subscribePlan } = require("../controllers/subscriptionController");

// for User only
router.post("/:planId", auth, role("user"), subscribePlan);

module.exports = router;
