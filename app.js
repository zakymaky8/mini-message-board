const express = require("express");
const { newFormRouter } = require("./route/newFormRouter");
const { indexRouter } = require("./route/indexRouter");
const path = require("path");

const app = express();

const PORT = 8080;
//  view engines
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

// parsers
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/", indexRouter);
app.use("/new", newFormRouter);
app.use(routeRedirector);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res
    .status(err.statusCode || 505)
    .render("error", { error: err})
})

function routeRedirector(req, res, next) {
    const possiblepaths = ["/", "/new", /message\/\d+/ ]
    if (!possiblepaths.includes(req.path)) {
        res.redirect("/new");
        return
    } else next()
}