const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
// const { errorHandler } = require("../utils/errorHandler");
const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "created successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  signup,
};
