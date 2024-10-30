// [GET] /admin/product
module.exports.index = (req, res) => {
  res.render("admin/pages/product/index.pug", {
    pageTitle: "Trang quản lí sản phẩm"
  })
}
