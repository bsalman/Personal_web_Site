-- to get the database using command line  write mysql --u root -p in terminal 
-- show databases;
-- use cv 
--show tables
CREATE TABLE IF NOT EXISTS personalinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    houseNumber VARCHAR(6) NOT NULL,
    zip INT NOT NULL,
    city VARCHAR(255) NOT NULL
);
