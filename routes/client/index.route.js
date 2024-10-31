const homeRoutes = require("./home.route");
const userRoutes = require("./user.route");
const aboutRoutes = require("./about.route");

module.exports = (app) => {
  app.use("/", homeRoutes);
  app.use("/user", userRoutes);
  app.use("/about", aboutRoutes);
}

