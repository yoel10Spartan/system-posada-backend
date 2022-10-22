// create table pos (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(50), lastname1 VARCHAR(50), lastname2 VARCHAR(50), contributor VARCHAR(50), email VARCHAR(50), numberPhone BIGINT, numberPhoneFijo BIGINT, mark VARCHAR(50), position VARCHAR(50), area VARCHAR(50), location VARCHAR(50), years INT);
// ALTER TABLE pos MODIFY COLUMN contributor VARCHAR(50);

import mysql from "mysql";
import dbConfig from "../config/db.config.js";

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

export default connection;