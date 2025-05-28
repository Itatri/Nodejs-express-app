// Khoi tao object titles
const titles = {
    title: 'Sản phẩm',
    navhome: 'Home',
    navcreate: 'Create',
    message: 'Danh sách sản phẩm'
}

let products = [];

// Import model product : Import model product từ product.model.js
const ProductEntity = require('../../models/product.model');
const ResponseType = require('../../dto/response.type');


exports.getAllproduct = async (req, res) => {
    const productList = await ProductEntity.find().populate('category');
    // Render view index.ejs : render chỉ nhận object
    res.render('product/index', {
        ...titles,
        products: productList
    }); 

    console.log(productList); 
};


exports.getProducrById = async (req, res) => {
    const {id }= req.params;
    res.json('Detail id is : ' + ProductEntity.findIndex(item => item.id == id));
};



exports.createProduct = (req, res)=> {
    // Render view create.ejs
    res.render('product/create'); 
};

exports.updateProduct = (req, res)=> {
    res.json('Update');
};


exports.deleteProduct = (req, res)=> {
    res.json('Delete');
};

exports.postCreateProduct = async (req, res)=> {
    try {
        // Lay du lieu tu form body
        const {body} = req;
        
        const newProduct = new ProductEntity(body);
        await newProduct.save();

        res.status(200).json(new ResponseType(newProduct).success());
    } 
    catch (error) {
        res.status(404).json(new ResponseType(null).error());
    }
}

exports.putEditProduct = async (req, res)=> {
    try {
        const {body} = req;
        const {id} = req.params;
        
        const updatedProduct = await ProductEntity.findByIdAndUpdate(
            id,
            {
                name: body.name,
                price: body.price,
                image: body.image,
                description: body.description
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json(new ResponseType(null).error());
        }

        res.status(200).json(new ResponseType(updatedProduct).success());
    } 
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json(new ResponseType(null).error());
    }
}

exports.getDetailProduct = async (req, res) => {
    const {id} = req.params;
    const product = await ProductEntity.findById(id);
    res.render('product/detail', {product});
};

exports.getDetailProductByApi = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await ProductEntity.findById(id);
        res.json(new ResponseType(product).success());
    }
    catch (error) {
        res.json(new ResponseType(null).error());
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductEntity.findByIdAndDelete(id);
        
        if (!result) {
            return res.json(new ResponseType(null).error());
        }

        res.status(200).json(new ResponseType(result).success());
    } catch (error) {
        console.log(error);
        res.status(404).json(new ResponseType(null).error());
    }
}