const mongoose = require("mongoose");
const connectedDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-auth");
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

module.exports = connectedDb;
