const User = require("../models/User");
const FitnessPlan = require("../models/FitnessPlan");

// ✅ GET ALL TRAINERS + THEIR PLANS
exports.getAllTrainersWithPlans = async (req, res) => {
  try {
    const trainers = await User.find({ role: "trainer" })
      .select("name");

    const result = [];

    for (let trainer of trainers) {
      const plans = await FitnessPlan.find({ trainerId: trainer._id });

      result.push({
        _id: trainer._id,
        name: trainer.name,
        plans
      });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
