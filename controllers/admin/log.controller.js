const LoginLog = require("../../models/loginLog.model");
const User = require("../../models/user.model");

// [GET] /admin/log
module.exports.index = async (req, res) => {
  // const users = await User.find({ username: { $ne: "admin" } });

  const loginLogs = await LoginLog.find({});
  Promise.all(
    loginLogs.map((loginLog) => User.findOne({ token: loginLog.token }))
  ).then((users) => {
    res.render("admin/pages/log/index.pug", {
      pageTitle: "Trang lịch sử đăng nhập",
      users: users,
      loginLogs: loginLogs
    });
  });
};
