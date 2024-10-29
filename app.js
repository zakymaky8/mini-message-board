const express = require("express");
const { newFormRouter } = require("./route/newFormRouter")
const { indexRouter } = require("./route/indexRouter");
const path = require("path");

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newFormRouter)

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})