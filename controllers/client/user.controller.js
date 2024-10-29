// [GET] /user/login
module.exports.login = (req, res) => {
  res.render("client/pages/user/login.pug", {
    pageTitle: "Đăng nhập"
  })
}