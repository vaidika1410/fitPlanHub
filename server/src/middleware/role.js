// this file is used for role based authentication --> denies permission for any unauthorized individuals

module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (req.role !== requiredRole) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
