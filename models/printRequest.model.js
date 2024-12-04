const mongoose = require("mongoose");
const { generateTokenString } = require("../helpers/generate");

const printRequestSchema = new mongoose.Schema(
  {
    token: String,
    requestId: {
      type: String,
      default: "ORD" + generateTokenString(20)
    },
    typePrint: String,
    stylePaperPrint: [{
    // file: File,
      paperSize: String,
      paperQuantity: Number
    }],
    printSide: String,
    printQuantity: Number,
    result: String,
  },
  {
    timestamps: true,
  }
);

const PrintRequest = mongoose.model("PrintRequest", printRequestSchema, "print-requests");

module.exports = PrintRequest;
