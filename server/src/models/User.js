const mongoose = require("mongoose");

// database schema for user

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "trainer"],
      default: "user",
    },
    followedTrainers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    purchasedPlans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FitnessPlan",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
