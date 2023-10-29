const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop',{
    projectTitle: 'Shop title',
    path: '',
    hasProducts: products.length>0,
    prods: products,
    activeShops: true,
    productCSS: true,
    render: true,
  
  });
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
