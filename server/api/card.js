const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  uploadCard,
  isCardForUserExists,
  getAccountInfo,
  removeCard,
  addMoney,
} = require('../modal/card');

router.use(bodyParser.json());

router.post('/uploadDetails', async (req, res) => {
  const { account, FullName, CardNumber, ExpirationDate, SecurityCode, Money } =
    req.body;
  if ((await isCardForUserExists(account)) == false) {
    uploadCard(
      account,
      FullName,
      CardNumber,
      ExpirationDate,
      SecurityCode,
      Money
    );
    res.send({
      message: 'Added Card Details',
    });
  } else {
    res.send({
      message: 'You already have a card',
    });
  }
});

router.post('/removeCard', async (req, res) => {
  const { account } = req.body;

  if (!account) {
    return res.send({
      message: 'Account is missing.',
    });
  }

  const removed = await removeCard(account);

  if (removed) {
    res.send({
      message: 'Card removed successfully.',
    });
  } else {
    res.send({
      message: 'Card not found.',
    });
  }
});

router.post('/addMoney', async (req, res) => {
  const { account, money } = req.body;
  console.log(account, money, 'THIS IS ACCOUNT AND BODY');
  addMoney(account, money);
});
router.get('/accountInfo', async (req, res) => {
  const accountDetails = await getAccountInfo();
  res.send(JSON.stringify(accountDetails));
});

module.exports = router;
