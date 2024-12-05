const mongoose = require("mongoose");
const database = require("./config/database"); // Module kết nối database
require("dotenv").config(); // Đọc file .env

const checkPrintersCollection = async () => {
  try {
    // Kết nối database
    await database.connect();

    // Truy cập collection `printers`
    const printersCollection = mongoose.connection.db.collection("users");

    // Lấy dữ liệu từ collection
    const printers = await printersCollection.find({}).toArray();
    console.log("Data in the 'printers' collection:");

    // In chi tiết từng tài liệu
    printers.forEach((printer, index) => {
      console.log(`- Printer #${index + 1}:`, printer);
    });

    // Đóng kết nối
    mongoose.connection.close();
  } catch (error) {
    console.error("Error checking printers collection:", error.message);
    process.exit(1);
  }
};

checkPrintersCollection();
