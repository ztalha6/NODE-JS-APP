const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products, docTitle: "Shop"
    });
});

module.exports = router;