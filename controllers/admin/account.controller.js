// [GET] /admin/account
module.exports.index = (req, res) => {
  res.render("admin/pages/account/index.pug", {
    pageTitle: "Trang tài khoản"
  })
}
