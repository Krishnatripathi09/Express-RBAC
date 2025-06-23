const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_STRING);
  console.log(
    `DataBase Connection SuccessFull : ${connect.connection.host},${connect.connection.name}`
  );
};

module.exports = {
  connectDB,
};
