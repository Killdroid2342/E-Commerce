const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  getshoeitems,
  getelectronicitems,
  getaccessoriesitems,
  getAllItems,
  insertItems,
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
router.get('/getMainItems', async (req, res) => {
  const productImages = [
    {
      img: 'src/assets/images/LatestShoe3.png',
      name: 'Jordans',
    },
    {
      img: 'src/assets/images/LatestShoe2.png',
      name: 'Jordans',
    },
    {
      img: 'src/assets/images/LatestShoe.png',
      name: 'Jordans',
    },
    {
      img: 'src/assets/images/jordan4.png',
      name: 'Jordans',
    },
  ];
  productImages.map((index) => {
    const { name, img } = index;
    console.log('hello', name, img);
    // insertItems(name, img);
  });
  res.send('Hello');
});
module.exports = router;
