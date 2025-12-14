const User = require("../models/User");
const FitnessPlan = require("../models/FitnessPlan");

exports.subscribePlan = async (req, res) => {
  try {
    const { planId } = req.params;

    const plan = await FitnessPlan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    const user = await User.findById(req.userId);

    if (user.purchasedPlans.includes(planId)) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    user.purchasedPlans.push(planId);
    await user.save();

    res.json(
      {
        message: "Subscribed successfully", planId,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
