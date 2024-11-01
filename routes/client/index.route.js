const homeRoutes = require("./home.route");
const userRoutes = require("./user.route");
const aboutRoutes = require("./about.route");
const productRoutes = require("./product.route");
const printRoutes = require("./print.route");

module.exports = (app) => {
  app.use("/", homeRoutes);
  app.use("/user", userRoutes);
  app.use("/about", aboutRoutes);
  app.use("/product", productRoutes);
  app.use("/print", printRoutes);
}

