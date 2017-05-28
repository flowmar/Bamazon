-- Create a database called 'Bamazon'
CREATE DATABASE Bamazon;
-- Create a table called 'products'
CREATE TABLE products
-- Add columns for item id, product name, department name, price and stock quantity
(item_id INTEGER(2) AUTO_INCREMENT NOT NULL PRIMARY KEY,
product_name VARCHAR(15) NOT NULL,
department_name VARCHAR(15) NOT NULL,
price REAL(4, 2) NOT NULL,
stock_quantity INTEGER(2));

-- Insert rows into table to add individual products
INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES
(1, 'Coffee Mugs', 'Kitchen Wares', 8.99, 8),
(2, 'Fancy Plates', 'Kitchen Wares', 15.99, 4),
(3, 'Headphones', 'Electronics', 12.99, 7),
(4, 'Toothbrush', 'Pharmacy', 3.99, 5),
(5, 'T-Shirt: Pink', 'Clothing', 7.99, 6),
(6, 'T-Shirt: Black', 'Clothing', 7.99, 6),
(7, 'Toothpaste', 'Pharmacy', 4.99, 6),
(8, 'Stapler', 'Home/Office', 5.99, 8),
(9, 'Deodorant', 'Pharmacy', 4.99, 7),
(10, 'Stylus', 'Electronics', 5.99, 9)

-- Show all columns from 'products' table
SELECT * FROM products;