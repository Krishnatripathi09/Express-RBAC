const express = require("express");

const router = express.Router();

//only Admin can access this Route
router.get("/admin", (req, res) => {
  res.json({ message: "Welcome Admin" });
});

//Both Admin and manager can access this route
router.get("/manager", (req, res) => {
  res.json({ message: "Welcome Manager" });
});

//All can Access this Route
router.get("/user", (req, res) => {
  res.json({ message: "Welcome User" });
});

module.exports =  router
