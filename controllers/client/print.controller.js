
// [GET] /print
module.exports.index = (req, res) => {
  res.render("client/pages/print/index.pug", {
    pageTitle: "Trang in ấn"
  })
}

// [GET] /print/create
module.exports.create = (req, res) => {
  res.render("client/pages/print/create.pug", {
    pageTitle: "Trang tạo in ấn"
  })
}

// [GET] /print/buy-paper
module.exports.buyPaper = (req, res) => {
  res.render("client/pages/print/buy-paper.pug", {
    pageTitle: "Mua giấy"
  })
}
