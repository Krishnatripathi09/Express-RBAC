const express = require("express");
const dotenv = require("dotenv").config();
const { dbConnect } = require("./config/dbConnect");
const authRoutes = require("../src/routes/authRoutes");
dbConnect();
const app = express();

//Use JSON Middleware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);

// Server is Running on PORT:
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
