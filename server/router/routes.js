const express = require('express');
const router = express.Router();

const getItemList = require('../handlers/itemHandler');
const getReviewList = require('../handlers/reviewHandler');
const getQnaList = require('../handlers/qnaHandler');
const getUserList = require('../handlers/userHandler');
const postSignupList = require('../handlers/signupHandler');
const postLoginList = require('../handlers/loginHandler');
const postLogout = require('../handlers/logoutHandler');
const { postEmail, postCode } = require('../handlers/mailingHandler');
const { postCartItem, getCartItem } = require ('../handlers/cartHandler');

router.get('/item', getItemList);
router.get('/reviews', getReviewList);
router.get('/qnas', getQnaList);
router.get('/users', getUserList);
router.get('/carts', getCartItem);
router.post('/signup', postSignupList);
router.post('/login', postLoginList);
router.post('/logout', postLogout);
router.post('/signup_email', postEmail);
router.post('/code_check', postCode);
router.post('/addcart', postCartItem);

module.exports = router;
