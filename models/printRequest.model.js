const mongoose = require("mongoose");

const printRequestSchema = new mongoose.Schema(
  {
    token: String,
    typePrint: String,
    pageQuantity: Number,
    file: File,
    paperSize: String,
    printSide: String,
    printQuantity: Number
  },
  {
    timestamps: true,
  }
);

const PrintRequest = mongoose.model("PrintRequest", printRequestSchema, "print-requests");

module.exports = PrintRequest;
