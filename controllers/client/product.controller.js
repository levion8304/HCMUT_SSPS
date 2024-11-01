// [GET] /product
module.exports.index = (req, res) => {
  res.render("client/pages/product/index.pug", {
    pageTitle: "Trang sản phẩm"
  })
}