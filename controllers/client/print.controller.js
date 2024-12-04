const Printer = require("../../models/printer.model");
const User = require("../../models/user.model");

//Các thông số fix khi chưa có Database
module.exports.messages = []
module.exports.num_page = 0
module.exports.bonus_price = 0
module.exports.total_price = 0
// [GET] /print
module.exports.index = (req, res) => {
  res.render("client/pages/print/index.pug", {
    pageTitle: "Trang in ấn"
  })
}

// [GET] /print/create
module.exports.create = async (req, res) => {
  await User.updateOne({ token: req.cookies.token }, 
    {printPage: 100})
  const printers = await Printer.find({ status: "standby" });
  res.render("client/pages/print/create.pug", {
    pageTitle: "Trang tạo in ấn",
    messages: module.exports.messages,
    printers: printers,
    num_page: module.exports.num_page,
    bonus_price: module.exports.bonus_price,
    total_price: module.exports.total_price,
  })
}

// [GET] /print/buy-paper
module.exports.buyPaper = (req, res) => {
  res.render("client/pages/print/buy-paper.pug", {
    pageTitle: "Mua giấy"
  })
}

//[POST] /print/create/get-input

module.exports.getPrintInfo = async (req,res) => {
  console.log(req.body);
  cost = 0
  page_cost = 0
  num_page = 0
  module.exports.messages = []
  //Get page cost from print type
  if(req.body.printtype=="colored"){
    page_cost = 3000
  }
  else if(req.body.printtype=="blackwhite"){
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
  
  module.exports.num_page = num_page
  module.exports.bonus_price = 5000
  module.exports.total_price = cost + module.exports.bonus_price
  res.redirect('/print/create')
}

//[GET] /print/create/confirm-print-info
module.exports.confirmPrint = async (req,res) => {
  const slotPrintLeft = await User.findOne({ token: req.cookies.token }).select("printPage");
  module.exports.messages = []
  if(module.exports.num_page>slotPrintLeft.printPage){
    module.exports.messages.push("Không đủ trang để in")
    req.flash("error", "Tin nhắn")
    res.redirect('/print/create')
  }
  else{
    await User.updateOne({ token: req.cookies.token }, 
      {printPage: slotPrintLeft.printPage - module.exports.num_page})
    console.log("Số trang in A4 còn lại :",slotPrintLeft.printPage)
    module.exports.num_page = 0
    module.exports.bonus_price = 0
    module.exports.total_price = 0
    req.flash("success", "Tin nhắn")
    res.redirect('/home')
  }
  
}





//[POST] /print/buy-paper/post-buypaper
module.exports.postBuypaper = (req, res) => {

  console.log(req.body); // Log dữ liệu gửi lên
  res.status(200).json({ message: 'Request received!' });
};
