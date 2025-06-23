const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `DataBase Connection SuccessFull : ${connect.connection.host},${connect.connection.name}`
    );
  } catch (err) {
    console.log("Error Occured :", err);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
