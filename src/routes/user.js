const express = require("express");
const router = express.Router();

// CONTROLLERS
const { createUser } = require("../controller/user");

// ROUTES
router.route("/").post(createUser);

module.exports = router;
