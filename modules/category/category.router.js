const express = require('express');
const router = express.Router();
const prefix = '/category'; 

const categoryController = require('./category.controller');


router.get(prefix, categoryController.getAllCategory); // Test url : http://localhost:3000/category
router.get(`${prefix}/detail/:id`, categoryController.getCategoryById); // Test url : http://localhost:3000/category/detail/68367790adfa126709304945


module.exports = router;