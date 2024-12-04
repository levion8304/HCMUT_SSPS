const LoginLog = require("../../models/loginLog.model");
const User = require("../../models/user.model");

// [GET] /admin/log
module.exports.index = async (req, res) => {
  const usersTotal = await User.find({ username: { $ne: "admin" } });

  const loginLogs = await LoginLog.find({ deleted: false });
  Promise.all(
    loginLogs.map((loginLog) => User.findOne({ token: loginLog.token }))
  ).then((users) => {
    res.render("admin/pages/log/index.pug", {
      pageTitle: "Trang lịch sử đăng nhập",
      users: users,
      usersTotal: usersTotal,
      loginLogs: loginLogs,
    });
  });
};

// [POST] /admin/log/delete/:id
module.exports.deletePost = async (req, res) => {
  try {
    await LoginLog.updateOne({ _id: req.params.id }, { deleted: true });
    req.flash("success", "Xoá thành công");
    res.redirect("back");
  } catch (error) {
    req.flash("error", "Xóa thất bại");
    res.redirect("back");
  }
};
