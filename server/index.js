const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const connectedDb = require("./config/db.config");

const apiRoutes = require("./routes/user.route");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRoutes);
app.listen(PORT, async () => {
  try {
    await connectedDb();
  } catch (error) {
    console.log(" error to connecting");
  }

  console.log(`Server is running on port ${PORT}`);
});
