const FitnessPlan = require("../models/FitnessPlan");
const User = require("../models/User");

exports.getUserFeed = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    const plans = await FitnessPlan.find({
      trainerId: { $in: user.followedTrainers },
    })
      .populate("trainerId", "name")
      .sort({ createdAt: -1 });

    const enrichedPlans = plans.map((plan) => ({
      _id: plan._id,
      title: plan.title,
      price: plan.price,
      duration: plan.duration,
      trainer: plan.trainerId.name,
      purchased: user.purchasedPlans.includes(plan._id),
    }));

    res.json(enrichedPlans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
