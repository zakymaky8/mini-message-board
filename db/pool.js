const { Pool } = require("pg");
require("dotenv").config();



module.exports = new Pool({
    user: process.env.DB_ROLE_NAME,
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.ROLE_PASSWORD,
    port: process.env.PORT

})