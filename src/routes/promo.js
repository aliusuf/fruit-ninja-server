const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  allPromos,
  removePromos,
  createPromos,
} = require("../controller/promo");

// ROUTES
router.route("/").get(allPromos).post(createPromos);
router.route("/:id").delete(removePromos);

module.exports = router;
