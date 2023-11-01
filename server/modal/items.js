const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection(process.env.DATABASE_URL);

const getItems = async () => {
  const res = conn
    .promise()
    .query('SELECT * FROM allItems')
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};

const getMainItems = async () => {
  const res = conn
    .promise()
    .query('SELECT * FROM main ')
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};
const searchItems = async (name) => {
  const res = conn
    .promise()
    .query('SELECT * FROM allItems WHERE name LIKE CONCAT("%", ?, "%")', [name])
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};
const insertItems = (img, des, lowPrice, price, name) => {
  const res = conn.query(
    'INSERT INTO allItems (img, des, lowPrice, price, name) VALUES (?, ?, ?, ?, ?)',
    [img, des, lowPrice, price, name]
  );
};
module.exports = {
  getItems,
  insertItems,
  getMainItems,
  searchItems,
};
