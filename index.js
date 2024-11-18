const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const clientRoutes = require("./routes/client/index.route");
const adminRoutes = require("./routes/admin/index.route");

const app = express();
// const port = process.env.PORT;
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.static(`${__dirname}/public`));

clientRoutes(app);
adminRoutes(app);

// App locals variables
const systemConfig = require("./config/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
