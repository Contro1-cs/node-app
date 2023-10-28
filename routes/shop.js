const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop',{title: 'Shop title', hasProducts: products.length>0, prods: products});
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
