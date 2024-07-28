const express = require("express");
const { test } = require("../controllers/user.controller");
const { signup, signin } = require("../controllers/auth.controller");
const router = express.Router();
router.get("/test", test);
router.post("/signup", signup);
router.post("/signin", signin);
module.exports = router;
