const dashboardRoutes = require("./dashboard.route");
const accountRoutes = require("./account.route");
const configRoutes = require("./config.route");
const logRoutes = require("./log.route");
const orderRoutes = require("./order.route");
const printerRoutes = require("./printer.route");
const productRoutes = require("./product.route");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  app.use(systemConfig.prefixAdmin + "/dashboard", dashboardRoutes);
  app.use(systemConfig.prefixAdmin + "/account", accountRoutes);
  app.use(systemConfig.prefixAdmin + "/config", configRoutes);
  app.use(systemConfig.prefixAdmin + "/log", logRoutes);
  app.use(systemConfig.prefixAdmin + "/order", orderRoutes);
  app.use(systemConfig.prefixAdmin + "/printer", printerRoutes);
  app.use(systemConfig.prefixAdmin + "/product", productRoutes);
}

