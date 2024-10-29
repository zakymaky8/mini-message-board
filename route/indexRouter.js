const { Router } = require("express");
const { getHome } = require("../controller/indexController")

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


const indexRouter = Router();

indexRouter.get("/", getHome)

module.exports = { indexRouter }