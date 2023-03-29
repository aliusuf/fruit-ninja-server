const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const UserModel = require("../models/user");
const sendResponse = require("../utils/sendResponse");

exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const userData = await UserModel.create(req.body);
  sendResponse(true, 200, "user", userData, res);
});
