CREATE DATABASE burgers_db;

USE burgers_db:

CREATE TABLE burgers (
    id INT (6) AUTO_INCREMENT,
    burger_name VARCHAR (70) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);