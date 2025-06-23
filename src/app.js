const express = require("express");
const dotenc = require("dotenv").config();
const app = express();

//Use JSON Middleware
app.use(express.json());

// Server is Running on PORT:
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
