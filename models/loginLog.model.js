const mongoose = require("mongoose");

const loginLogSchema = new mongoose.Schema(
  {
    token: String
  },
  {
    timestamps: true,
  }
);

const LoginLog = mongoose.model("LoginLog", loginLogSchema, "login-logs");

module.exports = LoginLog;
