const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce',
});

const getshoeitems = async () => {
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
const insertItems = (img, des, lowPrice, price, name) => {
  const res = conn.query(
    'INSERT INTO allItems (img, des, lowPrice, price, name) VALUES (?, ?, ?, ?, ?)',
    [img, des, lowPrice, price, name]
  );
};
module.exports = {
  getshoeitems,
  insertItems,
  getMainItems,
};
