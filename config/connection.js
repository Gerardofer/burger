const mysql = require ("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    const connection = mysql.createConnection({
        port: 3306,
        host:"localhost",
        user:"root",
        password: "Alqu1m14#1",
        database: "burgers_db"
    });
}
connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;