module.exports.index = (req, res) => {
  res.render("client/pages/print/index.pug", {
    pageTitle: "Trang in ấn"
  })
}