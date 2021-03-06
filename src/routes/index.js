const express = require('express');

const router = express.Router();

const {
  signUp,
  login, deleteFromCart, addToCart, renderCars, addToCartBtn, routProtector, logout, getMyCart,
} = require('../controllers');

router.post('/signup', signUp);
router.post('/login', login);
router.use(routProtector);
router.post('/addToCart', addToCartBtn);
router.get('/logout', logout);
router.get('/cars', renderCars);
router.post('/addcart', addToCart);
router.get('/myCart', getMyCart);
router.put('/delete', deleteFromCart);

module.exports = { router };
