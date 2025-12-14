const FitnessPlan = require("../models/FitnessPlan");

// CREATE PLAN
exports.createPlan = async (req, res) => {
  try {
    const { title, description, price, duration } = req.body;

    const plan = await FitnessPlan.create({
      title,
      description,
      price,
      duration,
      trainerId: req.userId,
    });

    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET TRAINER'S PLANS
exports.getMyPlans = async (req, res) => {
  try {
    const plans = await FitnessPlan.find({
      trainerId: req.userId,
    });

    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PLAN
exports.updatePlan = async (req, res) => {
  try {
    const plan = await FitnessPlan.findOneAndUpdate(
      { _id: req.params.id, trainerId: req.userId },
      req.body,
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE PLAN
exports.deletePlan = async (req, res) => {
  try {
    const plan = await FitnessPlan.findOneAndDelete({
      _id: req.params.id,
      trainerId: req.userId,
    });

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json({ message: "Plan deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
