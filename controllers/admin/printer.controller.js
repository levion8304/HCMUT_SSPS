const Printer = require("../../models/printer.model")

// [GET] /admin/printer
module.exports.index = async (req, res) => {
  const printers = await Printer.find({});

  res.render("admin/pages/printer/index.pug", {
    pageTitle: "Trang quản lý máy in",
    printers: printers
  })
}

// [GET] /admin/printer/create
module.exports.create = (req, res) => {
  res.render("admin/pages/printer/create.pug", {
    pageTitle: "Thêm máy in"
  })
}

// [POST] /admin/printer/create
module.exports.createPost = async (req, res) =>{
  const {name, description, status, power} = req.body;

  try {
    const newPrinter = new Printer({ name, description, status, power });
    await newPrinter.save();

  req.flash("success","Thêm máy in thành công");
  res.redirect("/admin/printer");    
  } catch (error) {
   req.flash("error","Thêm máy in thất bại");
   res.redirect("back"); 
  }
}
