const Product = require('../models/product');


exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        activeAddProduct: true,
        formsCSS: true,
    })
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products",
        });
    });

}