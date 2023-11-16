const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();

const { uploadCard, isCardForUserExists } = require('../modal/card');

router.use(bodyParser.json());

router.post('/uploadDetails', async (req, res) => {
  const {
    account,
    FirstName,
    LastName,
    CardNumber,
    ExpirationDate,
    SecurityCode,
    Money,
  } = req.body;
  if ((await isCardForUserExists(username)) == false) {
    uploadCard(
      account,
      FirstName,
      LastName,
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

module.exports = router;
