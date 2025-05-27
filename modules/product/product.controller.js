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
    title: 'Trang chủ',
    navhome: 'Home',
    navcreate: 'Create',
    message: 'Welcome to ITA'
}

const data = {
    ...titles,
   products: products
}


exports.getAllproduct = (req, res) => {
    // Render view index.ejs : render chỉ nhận object
    res.render('index', data);
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
    const body = req.body;
    res.json(body);
};

exports.updateProduct = (req, res)=> {
    res.json('Update');
};


exports.deleteProduct = (req, res)=> {
    res.json('Delete');
};
