const express = require("express");

const controller = require("../../controllers/client/user.controller");

const routes = express.Router();

routes.get("/login", controller.login);

routes.get("/signup", controller.signup);

routes.get("/log-order", controller.logOrder);

module.exports = routes;