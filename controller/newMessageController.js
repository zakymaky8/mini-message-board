module.exports = {
    getNewMessagePage: (req, res) => {
        res.render("form", { title: "Mini Messageboard"})
    }
}