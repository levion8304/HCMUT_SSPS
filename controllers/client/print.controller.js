const User = require("../../models/user.model");

//Các thông số fix khi chưa có Database
module.exports.account = 200000 //Số dư tài khoản SSPS
module.exports.numPapers = 100 //Số trang in
module.exports.messages = []

// [GET] /print
module.exports.index = (req, res) => {
  res.render("client/pages/print/index.pug", {
    pageTitle: "Trang in ấn"
  })
}

// [GET] /print/create
module.exports.create = (req, res) => {
  res.render("client/pages/print/create.pug", {
    pageTitle: "Trang tạo in ấn",
    messages: module.exports.messages
  })
}

// [GET] /print/buy-paper
module.exports.buyPaper = (req, res) => {
  res.render("client/pages/print/buy-paper.pug", {
    pageTitle: "Mua giấy"
  })
}

//[POST] /print/create/get-input
module.exports.getPrintInfo = (req,res) => {
  console.log(req.body);
  cost = 0
  page_cost = 0
  num_page = 0
  
  //Get page cost from print type
  if(req.body.printtype=="In màu"){
    page_cost = 3000
  }
  else if(req.body.printtype=="In đen trắng"){
    page_cost = 1000
  }
  
  //Get num_page from size, copy and pagenum
  if(req.body.size=="A0"){
    num_page = 16*req.body.copy*req.body.pagenum
  }
  else if(req.body.size=="A1"){
    num_page = 8*req.body.copy*req.body.pagenum
  }
  else if(req.body.size=="A2"){
    num_page = 4*req.body.copy*req.body.pagenum
  }
  else if(req.body.size=="A3"){
    num_page = 2*req.body.copy*req.body.pagenum
  }
  else if(req.body.size=="A4"){
    num_page = 1*req.body.copy*req.body.pagenum
  }
  
  //Caculate cost
  cost = num_page*page_cost
  module.exports.messages = []
  if(num_page>module.exports.numPapers){
    module.exports.messages.push("Không đủ trang để in")
    }
  else if(cost>module.exports.account){
    module.exports.messages.push("Không đủ tiền để in")
    }
  else{
    module.exports.messages.push("Đăng ký in hoàn tất")
  }
  console.log("Số dư tài khoản còn lại :",module.exports.account)
  console.log("Số trang còn lại :",module.exports.numPapers)
  res.redirect("/print/create")
}

//[POST] /print/buy-paper/post-buypaper
// [POST] /print/buy-paper/post-buypaper
module.exports.postBuypaper = async (req, res) => {
  try {
    const totalPage = req.body.totalPage; // Lấy từ request body hoặc query
    if (!totalPage) {
      req.flash("error", "Thông tin số trang không hợp lệ.");
      return res.redirect("/checkout/buy-paper");
    }

    const user = await User.findOne({ token: req.cookies.token }).select("printPage");

    user.printPage += parseInt(totalPage, 10); // Cộng số trang mới
    await user.save(); // Lưu lại thay đổi

    console.log("Số trang in sau update:", user.printPage);

    req.flash("success", `Cập nhật thành công! Số trang in hiện tại: ${user.printPage}`);
    res.redirect("/home");
  } catch (error) {
    console.error("Lỗi trong postBuypaper:", error);
    req.flash("error", "Có lỗi xảy ra. Vui lòng thử lại.");
    res.redirect("/checkout/buy-paper");
  }
};
