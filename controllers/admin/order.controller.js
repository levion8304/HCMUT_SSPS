// [GET] /admin/order
module.exports.index = (req, res) => {
  res.render("admin/pages/order/index.pug", {
    pageTitle: "Trang quản lý đơn hàng"
  })
}
