// Controller chua cac logic xu ly

// Khoi tao mang products
const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 1000,
        image: 'https://i.pinimg.com/736x/f2/62/48/f262483fce7f54b6d38915d0915c8362.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        price: 2000,
        image: 'https://i.pinimg.com/736x/f1/80/4c/f1804c929f1ca9927cc4c728940a3b6a.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description 3',
        price: 3000,
        image: 'https://i.pinimg.com/736x/b6/00/4a/b6004a42f8beb449cb551e2fcae62926.jpg'
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description 4',
        price: 4000,
        image: 'https://i.pinimg.com/736x/f2/62/48/f262483fce7f54b6d38915d0915c8362.jpg'
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Description 5',
        price: 5000,
        image: 'https://i.pinimg.com/736x/29/7b/25/297b25d0c0242ccc78af7782ab23d879.jpg'
    }
]
// Khoi tao object titles
const titles = {
    title: 'Sản phẩm',
    navhome: 'Home',
    navcreate: 'Create',
    message: 'Danh sách sản phẩm'
}

const data = {
    ...titles,
   products: products
}


exports.getAllproduct = (req, res) => {
    // Render view index.ejs : render chỉ nhận object
    res.render('product/index', data); // Render view index.ejs
};


exports.getProducrById =  (req, res) => {
    const {id }= req.params;
    res.json('Detail id is : ' + Hello.findIndex(item => item.id == id));
};

// app.get('/course/:id', (req, res) => {
//     // Link test : http://localhost:3000/course/1?name=Nguyen%20Van%20A&page=1
//    const {name, page} = req.query;
//    const {id} = req.params;
//    res.json('Name: ' + name + ' Page: ' + page + ' ID: ' + id);
// });

exports.createProduct = (req, res)=> {
    res.render('product/create'); // Render view create.ejs
};

exports.updateProduct = (req, res)=> {
    res.json('Update');
};


exports.deleteProduct = (req, res)=> {
    res.json('Delete');
};

exports.postCreateProduct = (req, res)=> {
    try {
        // Lay du lieu tu form
        const {body} = req;
        
        products.push({
            id : Number(Math.random()),
            ...body,
        });
        res.json(200);
    } 
    catch (error) {
        console.log(error);
    }
}

exports.putEditProduct = (req, res)=> {
    try {
        // Lay du lieu tu form
        const {body} = req;
        const {id} = req.params;
        const index = products.findIndex(item => item.id == id);
        
        products[index].name = body.name;
        products[index].price = body.price;
        products[index].image = body.image;

        res.json(200);
    } 
    catch (error) {
        console.log(error);
    }
}

exports.getDetailProduct = (req, res) => {
    const {id} = req.params;
    const product = products.find(item => item.id == id);
    res.render('product/detail', {product});
};

exports.getDetailProductByApi = (req, res) => {
    try {
        const {id} = req.params;
        const product = products.find(item => item.id == id);
        res.json(product);
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteProduct = (req, res) => {
    const {id} = req.params;
    const index = products.findIndex(item => item.id == id);
    products.splice(index, 1);

    try {
        const {id} = req.params;
        const index = products.findIndex(item => item.id == id);
        products.splice(index, 1);

        res.json(200);
    } catch (error) {
        console.log(error);
    }
}