const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  followTrainer,
  unfollowTrainer,
  getAllTrainersWithPlans
} = require("../controllers/followController");

// ✅ THIS WAS MISSING
router.get("/all", auth, getAllTrainersWithPlans);

router.post("/:id/follow", auth, followTrainer);
router.post("/:id/unfollow", auth, unfollowTrainer);

module.exports = router;
