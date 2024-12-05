const Request = require("../../models/printRequest.model");
const User = require("../../models/user.model");

// [GET] /admin/order
module.exports.index = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  let requests = null;
  let totalPages = 0;

  if (req.query.result) {
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
  Promise.all(
    requests.map((request) => User.findOne({ token: request.token }))
  ).then((users) => {
    res.render("admin/pages/order/index.pug", {
      pageTitle: "Quản lý đơn đặt in",
      requests: requests,
      users: users,
      printPageSize: printPageSize,
      page: page,
      totalPages: totalPages,
    });
  });
};
