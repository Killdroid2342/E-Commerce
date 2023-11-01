const { getDbConn } = require('../util');
require('dotenv').config();

const getItems = async () => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM allitems')
    .then(([rows, fields]) => {
      return rows;
    });
  conn.end();
  return res;
};

const getMainItems = async () => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM main ')
    .then(([rows, fields]) => {
      return rows;
    });
  conn.end();
  return res;
};
const searchItems = async (name) => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM allItems WHERE name LIKE CONCAT("%", ?, "%")', [name])
    .then(([rows, fields]) => {
      return rows;
    });
  conn.end();
  return res;
};
const insertItems = (img, des, lowPrice, price, name) => {
  const conn = getDbConn();
  const res = conn.query(
    'INSERT INTO allItems (img, des, lowPrice, price, name) VALUES (?, ?, ?, ?, ?)',
    [img, des, lowPrice, price, name]
  );
  conn.end();
};
module.exports = {
  getItems,
  insertItems,
  getMainItems,
  searchItems,
};
