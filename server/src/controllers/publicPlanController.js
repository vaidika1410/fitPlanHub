const FitnessPlan = require("../models/FitnessPlan");
const User = require("../models/User");

// GET ALL PLANS (PUBLIC)
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await FitnessPlan.find()
      .populate("trainerId", "name");

    const formatted = plans.map((p) => ({
      id: p._id,
      title: p.title,
      price: p.price,
      trainer: p.trainerId.name,
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET PLAN DETAILS (AUTH REQUIRED)
exports.getPlanDetails = async (req, res) => {
  try {
    const plan = await FitnessPlan.findById(req.params.id)
      .populate("trainerId", "name");

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    const user = await User.findById(req.userId);
    const hasAccess = user.purchasedPlans.includes(plan._id);

    if (!hasAccess) {
      return res.json({
        title: plan.title,
        trainer: plan.trainerId.name,
        price: plan.price,
        preview: true,
      });
    }

    res.json({
      title: plan.title,
      description: plan.description,
      duration: plan.duration,
      price: plan.price,
      trainer: plan.trainerId.name,
      preview: false,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
