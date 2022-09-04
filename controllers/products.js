const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        activeAddProduct: true,
        formsCSS: true,
    })
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getShop = (req, res) => {
    const products = Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: "Shop",
            path: "/",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });

}