const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product"
    })
})

router.post('/add-product', (req, res) => {
    const { name, description } = req.body;
    console.log(req.body);
    products.push({
        'title': req.body.title
    });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
