//Các thông số fix khi chưa có Database
module.exports.account = 200000 //Số dư tài khoản SSPS
module.exports.numPapers = 100 //Số trang in


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
    error_messages: []
  })
}

// [GET] /print/buy-paper
module.exports.buyPaper = (req, res) => {
  res.render("client/pages/print/buy-paper.pug", {
    pageTitle: "Mua giấy"
  })
}

//[GET] /print/create/get-input

module.exports.getPrintInfo = (req,res) => {
  console.log(req.query);
  cost = 0
  page_cost = 0
  num_page = 0
  
  //Get page cost from print type
  if(req.query.printtype=="In màu"){
    page_cost = 3000
  }
  else if(req.query.printtype=="In đen trắng"){
    page_cost = 1000
  }
  
  //Get num_page from size, copy and pagenum
  if(req.query.size=="A0"){
    num_page = 16*req.query.copy*req.query.pagenum
  }
  else if(req.query.size=="A1"){
    num_page = 8*req.query.copy*req.query.pagenum
  }
  else if(req.query.size=="A2"){
    num_page = 4*req.query.copy*req.query.pagenum
  }
  else if(req.query.size=="A3"){
    num_page = 2*req.query.copy*req.query.pagenum
  }
  else if(req.query.size=="A4"){
    num_page = 1*req.query.copy*req.query.pagenum
  }
  
  //Caculate cost
  cost = num_page*page_cost

  if(num_page>module.exports.numPapers){
    res.render("client/pages/print/create.pug", {
        error_messages: ["Không đủ trang để in"]
      })
    }
  else if(cost>module.exports.account){
    res.render("client/pages/print/create.pug", {
      error_messages: ["Không đủ tiền để in"]
      })
    }
  else{
    module.exports.numPapers = module.exports.numPapers - num_page
    module.exports.account = module.exports.account - cost
    res.render("client/pages/print/create.pug", {
        error_messages: []
      })
    }
  
  console.log("Số dư tài khoản còn lại :",module.exports.account)
  console.log("Số trang còn lại :",module.exports.numPapers)
}
