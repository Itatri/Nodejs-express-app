const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId, 
         // Tên model sản phẩm được tham chiếu 
        ref: 'ProductEntity'
    }
});

module.exports = mongoose.model('CategoryEntity', categorySchema, 'category'); 