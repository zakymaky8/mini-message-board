const { Client } = require("pg")
require("dotenv").config();

const SQL  = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message VARCHAR(255),
        author VARCHAR(255),
        added TIMESTAMP
 );
`




async function main() {
    console.log("seeding ...");
    console.log(process.env.ROLE_PASSWORD)
    const client = new Client({
        connectionString: `${process.env.PG_URL}`
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done!");
}

main()

// postgresql://user:password@host:port/dbname