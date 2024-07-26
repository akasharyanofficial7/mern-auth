const express = require("express");
const { test } = require("../controllers/user.controller");
const { signup } = require("../controllers/auth.controller");
const router = express.Router();
router.get("/test", test);
router.post("/signup", signup);
module.exports = router;
