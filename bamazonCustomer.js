// Require mysql package
var mysql = require('mysql');

// Create connection variable
var connection = mysql.createConnection({
    // Hostname and port
    host: "localhost",
    port: 3306,

    // Username
    user: "root",
    password: "",
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Bamazon as " + connection.threadId);
});

connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
});