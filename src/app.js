const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// ERROR HANDLER
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "src/config/config.env" });
}

// APP USE
app.use(
  "/public/images",
  express.static(path.resolve(__dirname, "../" + "public/images"))
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTE IMPORT
const promo = require("./routes/promo");
const user = require("./routes/user");

// TESTING
app.get("/", (req, res) => {
  res.json("working");
});

// CONTROLLERS
app.use("/api/promo", promo);
app.use("/api/user", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
