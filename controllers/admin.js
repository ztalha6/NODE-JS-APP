const { redirect } = require('express/lib/response');
const Product = require('../models/product');


exports.getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: false,
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

exports.postEditProduct = (req, res, next) => {
    
};

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    if (!editMode) {
        return res.redirect('/');
    }
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: "Edit Product",
            path: "/admin/edit-product",
            editing: editMode,
            product: product,
        })
    });
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