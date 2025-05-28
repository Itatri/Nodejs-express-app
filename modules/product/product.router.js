const express = require('express');
const router = express.Router();
const prefix = '/products'; // Test url : http://localhost:3000/products

// import controller
const productController = require('./product.controller');

// Router goi den function 
router.get(prefix, productController.getAllproduct);
router.get(`${prefix}/detail/:id`, productController.getDetailProduct);
router.get(`/api${prefix}/detail/:id`, productController.getDetailProductByApi);
router.delete(`${prefix}/detail/:id`, productController.deleteProduct); 
router.get(`${prefix}/create`, productController.createProduct); 
router.post(`${prefix}/create`, productController.postCreateProduct); 
router.put(`${prefix}/edit/:id`, productController.putEditProduct); 

module.exports = router;