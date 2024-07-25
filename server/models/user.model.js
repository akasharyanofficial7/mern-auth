const mongoose = require("mongoose");
const userSchema = mongoose.model(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestemps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
