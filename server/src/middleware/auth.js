const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

exports.optional = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return next();
  }

  try {
    const token = header.split(" ")[1];
    const decoded = require("jsonwebtoken").verify(
      token,
      process.env.JWT_SECRET
    );
    req.userId = decoded.id;
    req.role = decoded.role;
  } catch (err) {
    // ignore error → treat as guest
  }

  next();
};
