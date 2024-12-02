const homeRoutes = require("./home.route");
const userRoutes = require("./user.route");
const aboutRoutes = require("./about.route");
const productRoutes = require("./product.route");
const printRoutes = require("./print.route");

const authMiddleware = require("../../middlewares/client/auth.middleware");

module.exports = (app) => {
  app.use("/home", authMiddleware.requireAuth, homeRoutes);
  app.use("/user", userRoutes);
  app.use("/about", authMiddleware.requireAuth, aboutRoutes);
  app.use("/product", authMiddleware.requireAuth, productRoutes);
  app.use("/print", authMiddleware.requireAuth, printRoutes);
};
