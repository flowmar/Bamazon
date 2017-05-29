// Require mysql package
var mysql = require('mysql');

// Require inquirer package
var inquirer = require('inquirer');

// Create connection variable
var connection = mysql.createConnection({
    // Hostname and port
    host: "localhost",
    port: 3306,

    // Username, password
    user: "root",
    password: "",

    // Database name
    database: "Bamazon"
});

// Connect to specified database with credentials listed above
connection.connect(function(err) {
    // If there is an error, throw an error message
    if (err) throw err;
    // Log to show that connection was successful
    console.log("Connected to Bamazon as " + connection.threadId);
});

// Query the database for item ID, product name, and price
connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    // If there is an error, throw an error message
    if (err) throw err;
    // Log the response from the database
    console.log(res);
    // Begin questioning the customer about thier order
    askCustomer();
});

var askCustomer = function() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please enter the id of the product you wish to purchase.\n"
    }, {
        name: "units",
        message: "Please enter the number of units you wish to purchase."
    }]).then(function(answers) {
        id = answers.id;
        units = answers.units;
        console.log("The item id is " + id + "\nThe number of items is: " + units);
    });
};

var stockCheck = function() {

};

// query.then(function() {
//     askCustomer();
// })

// askCustomer();

// function Purchase(id, units) {
//     this.id = id;
//     this.units = units;

//     this.printReceipt = function() {
//         console.log("");
//     }

//     connection.query("UPDATE products SET ")
// }
// choices: ["Coffee Mugs", "Fancy Plates", "Headphones", "Toothbrush", "T-Shirt: Pink", "T-Shirt: Black", "Toothpaste", "Stapler", "Deodorant", "Stylus"]