class CustomeNotFoundError extends Error {
    constructor (message) {
        super(message);
        this.statusCode = 404;
        this.name = "Not Found"
    }
}

module.exports = {
    CustomeNotFoundError
}