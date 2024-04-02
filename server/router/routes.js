const express = require('express');
const router = express.Router();

const getItemList = require('../handlers/itemHandler');

router.get('/item', getItemList);

module.exports = router;
