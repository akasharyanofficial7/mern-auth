const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectedDb = require("./config/db.config");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, async () => {
  try {
    await connectedDb();
  } catch (error) {
    console.log(" error to connecting");
  }

  console.log(`Server is running on port ${PORT}`);
});
