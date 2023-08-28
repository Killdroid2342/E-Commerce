const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const { getItems, insertItems, getMainItems } = require('../modal/items');

router.use(bodyParser.json());

router.get('/allItems', async (req, res) => {
  const totalItems = await getItems();
  res.send(JSON.stringify(totalItems));
});

router.get('/addToDatabase', async (req, res) => {
  const data = [{}];
  data.map((index) => {
    const { img, des, lowPrice, price, name } = index;
    // insertItems(img, des, lowPrice, price, name);
  });
  res.send('Hello');
});
router.get('/getMainItems', async (req, res) => {
  const totalItems = await getMainItems();
  res.send(JSON.stringify(totalItems));
});

module.exports = router;
