// [GET] /checkout/buy-paper
module.exports.buyPaperIndex = (req, res) => {
  res.render("client/pages/checkout/buy-paper-index.pug", {
    pageTitle: "Thanh toán"
  })
}

// [GET] /checkout/print-request
module.exports.printRequestIndex = (req, res) => {
  res.render("client/pages/checkout/print-request-index.pug", {
    pageTitle: "Thanh toán"
  })
}