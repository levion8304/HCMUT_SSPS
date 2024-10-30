// [GET] /admin/log
module.exports.index = (req, res) => {
  res.render("admin/pages/log/index.pug", {
    pageTitle: "Trang lịch sử đăng nhập"
  })
}
