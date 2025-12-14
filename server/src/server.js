require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const planRoutes = require("./routes/planRoutes");
const publicPlanRoutes = require("./routes/publicPlanRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const followRoutes = require("./routes/followRoutes");
const feedRoutes = require("./routes/feedRoutes");
const auth = require("./middleware/auth");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES (LOCKED)
app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/plans/public", publicPlanRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/trainers", followRoutes);
app.use("/api/feed", feedRoutes);

// test route
app.get("/api/test", auth, (req, res) => {
  res.json({
    message: "Protected route working",
    userId: req.userId,
    role: req.role,
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
