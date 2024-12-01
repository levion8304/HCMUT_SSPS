const express = require("express");

const controller = require("../../controllers/client/user.controller");

const routes = express.Router();

routes.get("/login", controller.login);
routes.post("/login", controller.loginPost);

routes.get("/signup", controller.signup);
routes.post("/signup", controller.signupPost);

routes.get("/log-order", controller.logOrder);

module.exports = routes;