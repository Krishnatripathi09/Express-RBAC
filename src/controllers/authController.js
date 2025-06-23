const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");
const dotenv = require("dotenv").config();
const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = User({
      username,
      password: passwordHash,
      role,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: `User ${username} Registered Successfully` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User Not Found Please Enter Valid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1hr",
      }
    );

    if (isValidPassword) {
      res.cookie("token", token);
      return res.status(200).json({ message: "Logged-In SuccessFully" });
    } else {
      res.status(400).json({ message: "Please Enter Valid Credentials" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Error Occured" });
  }
};

module.exports = {
  register,
  login,
};
