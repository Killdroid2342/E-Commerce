const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  getshoeitems,
  getelectronicitems,
  getaccessoriesitems,
  getAllItems,
} = require('../modal/items');

router.use(bodyParser.json());

router.get('/getshoeitems', async (req, res) => {
  const totalItems = await getshoeitems();
  res.send(JSON.stringify(totalItems));
});
router.get('/getelectronicitems', async (req, res) => {
  const totalItems = await getelectronicitems();
  res.send(JSON.stringify(totalItems));
});
router.get('/getaccessoriesitems', async (req, res) => {
  const totalItems = await getaccessoriesitems();
  res.send(JSON.stringify(totalItems));
});
router.get('/getAllItems', async (req, res) => {
  const totalItems = await getAllItems();
  res.send(JSON.stringify(totalItems));
});

module.exports = router;
