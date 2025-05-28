
// Khai báo thư viện express
const express = require('express');
// Khởi tạo ứng dụng
const app = express();
// Định nghĩa port
const port = 3000;
//Import thu vien body-parser
const bodyParser = require('body-parser');

// Import file database 
const connectDB = require('./database');
connectDB();

// Cau hinh view engine su dung EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Cau hinh public static file de su dung folder trong project . 
// Test : http://localhost:3000/Itatri_portfo.jpg
app.use(express.static('public'));

// Cau hinh body-parser de nhan du lieu tu client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import router
const productRouter = require('./modules/product/product.router');
const categoryRouter = require('./modules/category/category.router');

// Use router
app.use('/', productRouter);
app.use('/', categoryRouter);
app.get('/', (req, res) => {
    res.render('index');
});

// Log server
app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});



