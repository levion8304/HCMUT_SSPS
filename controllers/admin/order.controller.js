const Request = require("../../models/printRequest.model");


// [GET] /admin/order
module.exports.index = async (req, res) => {
  const requests = await Request.find({});

  res.render("admin/pages/order/index.pug", {
    pageTitle: "Quản lý đơn đặt in",
    requests : requests
  })
}
