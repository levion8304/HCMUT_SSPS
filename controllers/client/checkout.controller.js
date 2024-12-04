// [GET] /checkout/buy-paper
module.exports.buyPaperIndex = (req, res) => {
  console.log(req.query);
  const {num1, num2, payment_method, agree_terms, total_price, totalpage} = req.query;
  res.render("client/pages/checkout/buy-paper-index.pug", {
    pageTitle: "Thanh toán",
    num1,
    num2,
    payment_method,
    agree_terms,
    total_price,
    totalpage: parseInt(total_price, 10) / 1000,
  })
}

// [GET] /checkout/print-request
module.exports.printRequestIndex = (req, res) => {
  res.render("client/pages/checkout/print-request-index.pug", {
    pageTitle: "Thanh toán"
  })
}