const { Router } = require("express");
const db = require('../db/query')

const asyncHandler = require("express-async-handler");
const { CustomeNotFoundError } = require("../error/customeNotFoundError");

const indexRouter = Router();

indexRouter.get("/", async(req, res) => {
    const messages = await db.getAllMessages()
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

indexRouter.post("/new", async (req, res) => {
  const {text, user} = req.body;
  await db.insertMessage(user, text);
  res.redirect("/");
})

indexRouter.get("/message/:msgId", asyncHandler( async (req, res) => {
  const { msgId } = req.params;
  const message = await db.getMessageById(Number(msgId));
  if (!message) {
      throw new CustomeNotFoundError("item is not found")
  } else {
    res.render("message", {message: message, title: message.author, headerTitle: "Mini Messageboard"})
  }
}))
module.exports = { indexRouter }