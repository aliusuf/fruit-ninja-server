const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const PromoModel = require("../models/promo");
const ErrorHandler = require("../utils/errorhandler");
const sendResponse = require("../utils/sendResponse");

exports.createPromos = catchAsyncErrors(async (req, res, next) => {
  const promos = req.body;

  // Create an array to store the created promo documents
  const createdPromos = [];

  // Loop through each promo in the array
  for (let i = 0; i < promos.length; i++) {
    const promo = promos[i];

    // Create a new PromoModel instance with the promo data
    const promoDoc = new PromoModel(promo);

    // Save the promo document to the database
    const createdPromo = await promoDoc.save();

    // Add the created promo to the array
    createdPromos.push(createdPromo);
  }

  sendResponse(true, 200, "message", "Added!", res);
});

exports.allPromos = catchAsyncErrors(async (req, res, next) => {
  // Find all promo codes in the database
  const promos = await PromoModel.find();

  if (!promos.length) {
    return next(new ErrorHandler("No Promo Available", 400));
  }

  // Select a random promo code from the list
  const randomIndex = Math.floor(Math.random() * promos.length);
  const randomPromo = promos[randomIndex];

  // Send the random promo code in the response
  sendResponse(true, 200, "promo", randomPromo, res);
});

exports.removePromos = catchAsyncErrors(async (req, res, next) => {
  await PromoModel.findByIdAndRemove(req.params.id);
  sendResponse(true, 200, "message", "Removed!", res);
});
