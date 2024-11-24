const express = require("express");

const controller = require("../../controllers/client/print.controller");

const routes = express.Router();

routes.get("/", controller.index);

routes.get("/create", controller.create);

routes.get("/buy-paper", controller.buyPaper);

routes.get('/create/get-print-info', controller.getPrintInfo)

routes.post('/buy-paper/post-Buypaper', controller.postBuypaper);

module.exports = routes;

