const express = require("express");

const controller = require("../../controllers/client/user.controller");

const { requireAuth } = require("../../middlewares/client/auth.middleware");
const uploadCloud = require("../../middlewares/client/uploadCloud.middleware");

const multer = require("multer");
const validate = require("../../validates/client/user.validate");
const upload = multer();

const routes = express.Router();

routes.get("/login", controller.login);
routes.post("/login", controller.loginPost);

routes.get("/signup", controller.signup);
routes.post(
  "/signup",
  upload.single("avatar"),
  uploadCloud.upload,
  validate.signupPost,
  controller.signupPost
);

routes.get("/log-order", requireAuth, controller.logOrder);

module.exports = routes;
