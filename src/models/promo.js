const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const promoSchema = new Schema({
  promo: {
    type: String,
    trim: true,
    required: [true, "Please Enter the Promocode"],
    unique: true,
  },
});

const PromoModel = new model("promo", promoSchema);
module.exports = PromoModel;
