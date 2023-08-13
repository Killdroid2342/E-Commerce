const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce',
});

module.exports = {};
