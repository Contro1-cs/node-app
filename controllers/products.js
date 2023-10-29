const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',
    {projectTitle: 'Add Product',
    path: 'admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true
    })
  };

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
  };

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop', {
      projectTitle: 'Shop title',
      path: '',
      hasProducts: products.length>0,
      prods: products,
      activeShops: true,
      productCSS: true,
      render: true,
    });
  });
};
