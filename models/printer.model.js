const mongoose = require("mongoose");

const printerSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    status: String,
    power: String,
    printPapers: [
      {
        // file: File,
        paperSize: String,
        paperQuantity: Number,
      },
    ],
    location: String,
    thumbnail: String,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Printer = mongoose.model("Printer", printerSchema, "printers");

module.exports = Printer;
