// [GET] /admin/config
module.exports.index = (req, res) => {
  res.render("admin/pages/config/index.pug", {
    pageTitle: "Trang quản lý cấu hình"
  })
}
