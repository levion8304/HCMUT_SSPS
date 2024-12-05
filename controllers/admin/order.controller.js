const Request = require("../../models/printRequest.model");
const User = require("../../models/user.model");
const Printer = require("../../models/printer.model");

// [GET] /admin/order
module.exports.index = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  
  let requests = null;
  let totalPages = 0;

  if (req.query.result && printerLocation) {
    requests = await Request.find({ result: req.query.result });
    totalPages = Math.ceil(requests.length / 20);
    requests = await Request.find({ result: req.query.result })
      .skip((page - 1) * 20)
      .limit(20);
  } else {
    requests = await Request.find({});
    totalPages = Math.ceil(requests.length / 20);
    requests = await Request.find({})
      .skip((page - 1) * 20)
      .limit(20);
  }

  let printPageSize = [];
  requests.forEach((request) => {
    let temp = "";
    temp += "A0 : " + String(request.stylePaperPrint[0].paperQuantity) + " | ";
    temp += "A1 : " + String(request.stylePaperPrint[1].paperQuantity) + " | ";
    temp += "A2 : " + String(request.stylePaperPrint[2].paperQuantity) + " | ";
    temp += "A3 : " + String(request.stylePaperPrint[3].paperQuantity) + " | ";
    temp += "A4 : " + String(request.stylePaperPrint[4].paperQuantity);
    printPageSize.push(temp);
  });
  const mySet = new Set();
  requests.forEach((request) => {
    mySet.add(request.printerId);
  });
  const printerIdDropdownList = [...mySet];

  const mapUser = async (requests) => {
    const users = await Promise.all(
      requests.map((request) => User.findOne({ token: request.token }))
    );
    return users;
  };
  const mapPrinter = async (requests) => {
    const printers = await Promise.all(
      requests.map((request) => Printer.findOne({ _id: request.printerId }))
    );
    return printers;
  };
  const users = await mapUser(requests);
  const printers = await mapPrinter(requests);
  res.render("admin/pages/order/index.pug", {
    pageTitle: "Quản lý đơn đặt in",
    requests: requests,
    users: users,
    printers: printers,
    printPageSize: printPageSize,
    page: page,
    totalPages: totalPages,
    printerIdDropdownList: printerIdDropdownList,
  });
};
