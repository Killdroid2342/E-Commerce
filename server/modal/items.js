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
    .query('SELECT * FROM shoeitems')
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};
const getelectronicitems = async () => {
  const res = conn
    .promise()
    .query('SELECT * FROM electronicitems')
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};
const getaccessoriesitems = async () => {
  const res = conn
    .promise()
    .query('SELECT * FROM accessoriesitems')
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};

const getAllItems = async () => {
  const res = conn
    .promise()
    .query(
      'SELECT * FROM accessoriesitems UNION SELECT * FROM electronicitems UNION SELECT * FROM shoeitems;'
    )
    .then(([rows, fields]) => {
      return rows;
    });
  return res;
};

module.exports = {
  getshoeitems,
  getelectronicitems,
  getaccessoriesitems,
  getAllItems,
};
