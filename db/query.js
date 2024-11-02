const pool = require('./pool');

async function insertMessage(author, message) {
    await pool.query(`INSERT INTO messages (message, author, added) VALUES ('${message}', '${author}', NOW())`)
}


async function getMessageById(id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
    return rows;
}


async function getAllMessages() {
    const { rows } = await pool.query(`SELECT * FROM messages;`)
    return rows;
}


module.exports = { 
    insertMessage,
    getMessageById,
    getAllMessages
 }