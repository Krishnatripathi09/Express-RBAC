const express = require("express");
const dotenv = require("dotenv").config();
const { dbConnect } = require("./config/dbConnect");
const authRoutes = require("../src/routes/authRoutes");
const userRoutes = require("../src/routes/userRoutes");
dbConnect();
const app = express();

//Use JSON Middleware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Server is Running on PORT:
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
