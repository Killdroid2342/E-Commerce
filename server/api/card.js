const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  uploadCard,
  isCardForUserExists,
  getAccountInfo,
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

router.get('/accountInfo', async (req, res) => {
  const accountDetails = await getAccountInfo();
  res.send(JSON.stringify(accountDetails));
});

module.exports = router;
