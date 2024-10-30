const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const { CustomeNotFoundError } = require("../error/customeNotFoundError");
 const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    }
  ];


const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

indexRouter.post("/new", (req, res) => {
  const {text, user} = req.body
  messages.push({id: messages.length + 1, text: text, user: user, added: new Date()})
  res.redirect("/");
})

indexRouter.get("/message/:msgId", asyncHandler( async (req, res) => {
  const { msgId } = req.params;

  const message = messages.find(message => Number(msgId) === message.id)

  if (!message) {
      throw new CustomeNotFoundError("item is not found")
  }
  res.render("message", {message: message, title: message.user, headerTitle: "Mini Messageboard"})
}))
module.exports = { indexRouter, messages }