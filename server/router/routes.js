const express = require('express');
const router = express.Router();

const getItemList = require('../handlers/itemHandler');
const getReviewList = require('../handlers/reviewHandler');
const getQnaList = require('../handlers/qnaHandler');
const getUserList = require('../handlers/userHandler');
const postSignupList = require('../handlers/signupHandler');
const postLoginList = require('../handlers/loginHandler');

router.get('/item', getItemList);
router.get('/reviews', getReviewList);
router.get('/qnas', getQnaList);
router.get('/users', getUserList);
router.post('/signup', postSignupList);
router.post('/login', postLoginList);

module.exports = router;
