const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const verifyToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      res
        .status(401)
        .json({ message: "Authorization Denied! Please Log-In Again" });
    }
    try {
      const decodedMsg = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedMsg;
      console.log(" The decoded user is :", req.user);
      next();
    } catch (error) {
      res
        .status(400)
        .json("message: Please Log-In Again ==> Token is Not Valid");
    }
  } else {
    res
      .status(401)
      .json({ message: "Authorization Denied! Please Log-In Again" });
  }
};

module.exports = verifyToken;
