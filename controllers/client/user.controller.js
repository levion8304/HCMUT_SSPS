const User = require("../../models/user.model");
const CryptoJS = require("crypto-js");

// [GET] /user/login
module.exports.login = async (req, res) => {
  if (req.cookies.token) {
    const user = await User.findOne({ token: req.cookies.token });
    if (user) {
      res.redirect("/home");
      return;
    }
  }

  res.render("client/pages/user/login.pug", {
    pageTitle: "Đăng nhập",
    noHeader: true,
  });
};

// [POST] /user/login
module.exports.loginPost = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    username: username,
  });

  if (!user) {
    req.flash("error", "Tài khoản không tồn tại!");
    res.redirect("back");
    return;
  }

  if (CryptoJS.SHA256(password).toString() !== user.password) {
    req.flash("error", "Mật khẩu không đúng!");
    res.redirect("back");
    return;
  }

  res.cookie("token", user.token);

  if (username === "admin") {
    res.redirect("/admin/dashboard");
  } else {
    res.redirect("/home");
  }
};

// [GET] /user/signup

module.exports.signup = async (req, res) => {
  if (req.cookies.token) {
    const user = await User.findOne({ token: req.cookies.token });
    if (user) {
      res.redirect("/home");
      return;
    }
  }

  res.render("client/pages/user/signup.pug", {
    pageTitle: "Đăng ký",
    noHeader: true,
  });
};

// [POST] /user/signup
module.exports.signupPost = async (req, res) => {
  const { password } = req.body;

  const newUser = { ...req.body };
  newUser.password = CryptoJS.SHA256(password).toString();

  try {
    const user = new User(newUser);
    await user.save();

    req.flash("success", "Đăng kí thành công!");
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    req.flash("success", "Đăng kí thất bại!");
    res.redirect("back");
  }
};

// [GET] /user/logout
module.exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/user/login");
};

// [GET] /user/log-order
module.exports.logOrder = (req, res) => {
  res.render("client/pages/user/log-order.pug", {
    pageTitle: "Lịch sử đặt in",
  });
};
