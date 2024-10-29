const express = require("express");

const controller = require("../../controllers/client/user.controller");

const routes = express.Router();

routes.get("/login", controller.login);

module.exports = routes;