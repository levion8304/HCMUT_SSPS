const User = require("../../models/user.model");
const CryptoJS = require("crypto-js");
const systemConfig = require("../../config/system");

// [GET] /admin/user
module.exports.index = async (req, res) => {
  const users = await User.find({ username: { $ne: "admin" } });
  users.forEach((user) => {
    var bytes = CryptoJS.AES.decrypt(user.password, "secretkey");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    user.password = originalText;
  });
  res.render("admin/pages/user/index.pug", {
    pageTitle: "Quản lí tài khoản",
    users: users,
  });
};

// [GET] /admin/user/edit/:id
module.exports.edit = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  var bytes = CryptoJS.AES.decrypt(user.password, "secretkey");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  user.password = originalText;
  res.render("admin/pages/user/edit.pug", {
    pageTitle: "Chỉnh sửa tài khoản",
    userDetail: user,
  });
};

// [PATCH] /admin/user/edit/:id
module.exports.editPatch = async (req, res) => {
  try {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      "secretkey"
    ).toString();
    await User.updateOne({ _id: req.params.id }, req.body);
    // res.send("OK");
    req.flash("success", "Cập nhật thành công");
    res.redirect(systemConfig.prefixAdmin + "/user/");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại");
    res.redirect("back");
  }
};

// [POST] /admin/user/delete/:id
module.exports.deletePost = async (req, res) => {
  res.send("OK");
}
