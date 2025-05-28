
// Import model product : Import model product từ product.model.js
const ResponseType = require('../../dto/response.type');
const CategoryEntity = require('../../models/category.model');


exports.getAllCategory = async (req, res) => {

    try {
        const categoryList = await CategoryEntity.find();
        res.json(new ResponseType(categoryList).success());
    }
    catch (error) {
        res.json(new ResponseType(categoryList).error());
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await CategoryEntity.findById(req.params.id);
        res.json(new ResponseType(category).success());
    }
    catch (error) {
        res.json(new ResponseType(category).error());
    }
};