const mongoose = require('mongoose');

// Tao schema product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
         // Tên model danh mục được tham chiếu 
        ref: 'CategoryEntity',
        required: true
    }
});

// Export model product : 'Thuoc tinh' , 'Schema' , 'Ten bang'
module.exports = mongoose.model('ProductEntity', productSchema, 'product'); 