// [GET] /user/login
module.exports.login = (req, res) => {
  res.render("client/pages/user/login.pug", {
    pageTitle: "Đăng nhập"
  })
}

// [POST] /user/login
module.exports.loginPost = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  res.send("OK");
}

// [GET] /user/signup
module.exports.signup = (req, res) => {
  res.render("client/pages/user/signup.pug", {
    pageTitle: "Đăng ký"
  })
}

// [POST] /user/signup
module.exports.signupPost = (req, res) => {
  
  res.send("OK");
}

// [GET] /user/log-order
module.exports.logOrder = (req, res) => {
  res.render("client/pages/user/log-order.pug", {
    pageTitle: "Lịch sử đơn hàng"
  })
}