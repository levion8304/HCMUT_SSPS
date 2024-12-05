const mongoose = require("mongoose");
const { generateTokenString } = require("../helpers/generate");

const printRequestSchema = new mongoose.Schema(
  {
    token: String, // Lấy từ tài khoản bất kì trong user
    requestId: {
      type: String,
      default: "ORD" + generateTokenString(20)
    },
    typePrint: String, //blackwhite, colored
    file: String,
    printerId: String,
    stylePaperPrint: [{
    // file: File,
      paperSize: String, //A0 , A1 , A2 , A3 , A4
      paperQuantity: Number
    }],
    printSide: String, //front, back , both
    printQuantity: Number,// Bản in
    result: String, //printing , printed , failed
  },
  {
    timestamps: true,
  }
);

const PrintRequest = mongoose.model("PrintRequest", printRequestSchema, "print-requests");

module.exports = PrintRequest;

