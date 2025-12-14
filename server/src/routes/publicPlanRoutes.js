const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getAllPlans,
  getPlanDetails,
} = require("../controllers/publicPlanController");

// PUBLIC: list all plans (landing, user browsing)
router.get("/", getAllPlans);

// PROTECTED: plan details (preview/full based on subscription)
router.get("/:id", auth, getPlanDetails);

module.exports = router;
