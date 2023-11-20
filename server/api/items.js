const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  getItems,
  insertItems,
  getMainItems,
  searchItems,
  purchasedItems,
} = require('../modal/items');

router.use(bodyParser.json());

router.get('/allItems', async (req, res) => {
  const totalItems = await getItems();
  res.send(JSON.stringify(totalItems));
});
router.post('/search', async (req, res) => {
  const { searchItem } = req.body;
  const matchingItems = await searchItems(searchItem);
  res.status(200).send(matchingItems);
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

router.post('/purchasedItems', async (req, res) => {
  const { name, price, shoe, amount, account } = req.body;
  purchasedItems(name, price, shoe, amount, account);
});

module.exports = router;
