const mongoose = require("mongoose");
const { generateTokenString } = require("../helpers/generate");

const userSchema = new mongoose.Schema(
  {
    fullname: String,
    avatar: String,
    username: String,
    password: String,
    email: String,
    phoneNumber: String,
    birthday: String,
    sex: String,
    nationality: String,
    address: String,
    loginTimes: {
      type: Number,
      default: 0
    },
    token: {
      type: String,
      default: generateTokenString(20),
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
