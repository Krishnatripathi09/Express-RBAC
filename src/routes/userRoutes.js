const authorizedRoles = require("../middlewares/roleMiddleware");
const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const { verify } = require("jsonwebtoken");
const router = express.Router();

//only Admin can access this Route
router.get("/admin", verifyToken, authorizedRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

//Both Admin and manager can access this route
router.get(
  "/manager",
  verifyToken,
  authorizedRoles("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome Manager" });
  }
);

//All can Access this Route
router.get(
  "/user",
  verifyToken,
  authorizedRoles("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);

module.exports = router;
