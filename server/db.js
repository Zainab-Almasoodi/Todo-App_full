const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Almasoodi5",
    host: "localhost",
    port: 5432,
    database: "authtodolist"
})

module.exports = pool;