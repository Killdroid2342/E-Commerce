const bcrypt = require('bcrypt');
const { getDbConn } = require('../util');
require('dotenv').config();

const uploadCard = async (
  account,
  FullName,
  CardNumber,
  ExpirationDate,
  SecurityCode,
  Money
) => {
  const conn = getDbConn();
  conn.query(
    'INSERT INTO ecommerce_carddetails (account, FullName, CardNumber, ExpirationDate, SecurityCode, Money) VALUES (?,?,?,?,?,?)',
    [account, FullName, CardNumber, ExpirationDate, SecurityCode, Money]
  );
  conn.end();
};

const isCardForUserExists = (account) => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM ecommerce_carddetails WHERE account = ?', [account])
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        return rows[0];
      } else {
        return false;
      }
    });
  conn.end();
  return res;
};
const getAccountInfo = async () => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM ecommerce_carddetails ')
    .then(([rows, fields]) => {
      return rows;
    });
  conn.end();
  return res;
};
const removeCard = (account) => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('DELETE FROM ecommerce_carddetails WHERE account = ?', [account])
    .then(([rows, fields]) => {
      if (rows.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    })
    .finally(() => {
      conn.end();
    });
  return res;
};
const addMoney = async (account, money) => {
  const conn = getDbConn();
  const res = await conn
    .promise()
    .query(
      'UPDATE ecommerce_carddetails SET Money = Money + ? WHERE account = ?',
      [money, account]
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .finally(() => {
      conn.end();
    });
  return res;
};
module.exports = {
  uploadCard,
  isCardForUserExists,
  getAccountInfo,
  removeCard,
  addMoney,
};
