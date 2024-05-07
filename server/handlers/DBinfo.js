const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "kurly",
    password: "111111",
    database: "post"
});
db.connect();

module.exports = db;