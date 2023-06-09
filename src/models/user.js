const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|googlemail\.com)$/,
      "Please fill a valid email address",
    ],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
});

const UserModel = new model("user", userSchema);
module.exports = UserModel;
