// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

//To hookup my project with heroku JawsDB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;