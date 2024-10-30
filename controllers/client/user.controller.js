// [GET] /user/login
module.exports.login = (req, res) => {
  res.render("client/pages/user/login.pug", {
    pageTitle: "Đăng nhập"
  })
}

// [GET] /user/signup
module.exports.signup = (req, res) => {
  res.render("client/pages/user/signup.pug", {
    pageTitle: "Đăng ký"
  })
}