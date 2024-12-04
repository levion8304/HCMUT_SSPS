const Printer = require("../../models/printer.model");
const systemConfig = require("../../config/system");

// [GET] /admin/printer
module.exports.index = async (req, res) => {
  const printers = await Printer.find({ deleted: false });

  let countStandby = 0, countOn = 0, countUsing = 0;
  for (const printer of printers) {
    if (printer.status == "standby") {
      countStandby++;
    } else {
      countUsing++;
    }
    if (printer.power == "on") {
      countOn++;
    }
  }

  res.render("admin/pages/printer/index.pug", {
    pageTitle: "Trang quản lý máy in",
    printers: printers,
    countStandby: countStandby,
    countOn: countOn,
    countUsing: countUsing
  });
};

// [GET] /admin/printer/create
module.exports.create = (req, res) => {
  res.render("admin/pages/printer/create.pug", {
    pageTitle: "Thêm máy in",
  });
};

// [POST] /admin/printer/create
module.exports.createPost = async (req, res) => {
  try {
    const newPrinter = new Printer(req.body);
    await newPrinter.save();

    req.flash("success", "Thêm máy in thành công");
    res.redirect(`${systemConfig.prefixAdmin}/printer`);
  } catch (error) {
    req.flash("error", "Thêm máy in thất bại");
    res.redirect("back");
  }
};

// [GET] /admin/printer/edit/:id
module.exports.edit = async (req, res) => {
  const printer = await Printer.findOne({ _id: req.params.id });

  res.render("admin/pages/printer/edit.pug", {
    pageTitle: "Cập nhật máy in",
    printer: printer,
  });
};

// [PATCH] /admin/printer/edit/:id
module.exports.editPatch = async (req, res) => {
  try {
    await Printer.updateOne(
      {
        _id: req.params.id,
      },
      req.body
    );
    req.flash("success", "Cập nhật thành công!");
    res.redirect(`${systemConfig.prefixAdmin}/printer`);
  } catch (error) {
    req.flash("error", "Cập nhật thất bại!");
    res.redirect("back");
  }
};

// [POST] /admin/printer/delete/:id
module.exports.deletePost = async (req, res) => {
  try {
    await Printer.updateOne(
      {
        _id: req.params.id,
      },
      { deleted: true }
    );
    req.flash("success", "Xóa máy in thành công!");
    res.redirect("back");
  } catch (error) {
    req.flash("success", "Xóa máy in thất bại!");
    res.redirect("back");
  }
};
