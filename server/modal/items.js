const { getDbConn } = require('../util');
require('dotenv').config();

const getItems = async () => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM ecommerce_allitems')
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
    .query('SELECT * FROM ecommerce_main ')
    .then(([rows, fields]) => {
      return rows;
    });
  conn.end();
  return res;
};
const getPurchasedItems = async (account) => {
  const conn = getDbConn();
  const [rows, fields] = await conn
    .promise()
    .query('SELECT * FROM ecommerce_purchaseditems WHERE account = ?', [
      account,
    ]);
  conn.end();
  return rows;
};

const clearPurchasedItems = async (account) => {
  const conn = getDbConn();
  const res = await conn
    .promise()
    .query('DELETE FROM ecommerce_purchaseditems WHERE account = ?', [account]);
  conn.end();
  return res;
};
const searchItems = async (name) => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query(
      'SELECT * FROM ecommerce_allitems WHERE name LIKE CONCAT("%", ?, "%")',
      [name]
    )
    .then(([rows, fields]) => {
      return rows;
    });
  conn.end();
  return res;
};
const insertItems = (img, des, lowPrice, price, name) => {
  const conn = getDbConn();
  const res = conn.query(
    'INSERT INTO ecommerce_allitems (img, des, lowPrice, price, name) VALUES (?, ?, ?, ?, ?)',
    [img, des, lowPrice, price, name]
  );
  conn.end();
};
const purchasedItems = (name, price, shoe, amount, account) => {
  const conn = getDbConn();
  const res = conn.query(
    'INSERT INTO ecommerce_purchaseditems (name, price, shoe, amount, account ) VALUES (?, ?, ?, ?, ?)',
    [name, price, shoe, amount, account]
  );
  conn.end();
};
module.exports = {
  getItems,
  insertItems,
  getMainItems,
  searchItems,
  purchasedItems,
  getPurchasedItems,
  clearPurchasedItems,
};
