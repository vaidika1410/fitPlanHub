const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");
const {
  createPlan,
  getMyPlans,
  updatePlan,
  deletePlan,
} = require("../controllers/planController");

router.post("/", auth, role("trainer"), createPlan);
router.get("/mine", auth, role("trainer"), getMyPlans);
router.put("/:id", auth, role("trainer"), updatePlan);
router.delete("/:id", auth, role("trainer"), deletePlan);

module.exports = router;
