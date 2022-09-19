require("dotenv").config();
const mysql = require("mysql2");
const Connection = require("mysql2/typings/mysql/lib/Connection");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
