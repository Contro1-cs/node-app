const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const productController = require('../controllers/products.js');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
