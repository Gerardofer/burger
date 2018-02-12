const mysql = require ("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Alqu1m14#1",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;