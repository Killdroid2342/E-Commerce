const bcrypt = require('bcrypt');
const { getDbConn } = require('../util');
require('dotenv').config();

const uploadCard = async (
  account,
  FirstName,
  LastName,
  CardNumber,
  ExpirationDate,
  SecurityCode,
  Money
) => {
  const conn = getDbConn();
  conn.query(
    'INSERT INTO ecommerce_carddetails (account, FirstName, LastName, CardNumber, ExpirationDate, SecurityCode, Money) VALUES (?,?,?,?,?,?,?)',
    [
      account,
      FirstName,
      LastName,
      CardNumber,
      ExpirationDate,
      SecurityCode,
      Money,
    ]
  );
  conn.end();
};
const isCardForUserExists = () => {
  const conn = getDbConn();
  const res = conn
    .promise()
    .query('SELECT * FROM ecommerce_carddetails WHERE username = ?', [username])
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
module.exports = {
  uploadCard,
  isCardForUserExists,
};
