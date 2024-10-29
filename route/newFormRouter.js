const { Router } = require("express");
const { getNewMessagePage } = require("../controller/newMessageController")

const newFormRouter = Router();

newFormRouter.get("/", getNewMessagePage)

module.exports = { newFormRouter }