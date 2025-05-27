const express = require('express');
const router = express.Router();
const prefix = '/products'; // Test url : http://localhost:3000/products
// import controller
const productController = require('./product.controller');

// Goi den function getAllproduct
// Goi den function getAllproduct
router.get(prefix, productController.getAllproduct);
router.get(`${prefix}/detail/:id`, productController.getProducrById); 
router.get(`${prefix}/create`, productController.createProduct); 
router.post(`${prefix}/create`, productController.postCreateProduct); 
router.post(prefix, productController.createProduct);
router.put(prefix, productController.updateProduct);
router.delete(prefix, productController.deleteProduct);

module.exports = router;