const express = require("express");

const controller = require("../../controllers/client/print.controller");

const routes = express.Router();

routes.get("/", controller.index);

routes.get("/create", controller.create);

module.exports = routes;