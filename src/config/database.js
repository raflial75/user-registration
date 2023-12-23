/* eslint-disable linebreak-style */
/* eslint-disable indent */
require('dotenv').config()

const mysql = require('mysql2/promise');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_SCHEMA,
    port: '3306',
});

module.exports = connection;
