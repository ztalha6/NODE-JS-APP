const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');


// /admin/add-product => get
router.get('/add-product', adminController.getAddProduct);

// /admin/products => get
router.get('/products', adminController.getProducts);

// /admin/add-product => post
router.post('/add-product', adminController.postAddProduct);



module.exports = router;
