// [GET] /admin/printer
module.exports.index = (req, res) => {
  res.render("admin/pages/printer/index.pug", {
    pageTitle: "Trang quản lý máy in"
  })
}
