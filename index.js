
// Tiep nhan thong tin 
// Nhan thong tin từ client
// Phan hoi thong tin ve client
// Get method lên server
// Dinh nghia url cho duong dan controller . Vd : /create


// Khai báo thư viện express
const express = require('express');
// Khởi tạo ứng dụng
const app = express();

// Định nghĩa port
const port = 3000;

//Import thu vien body-parser
const bodyParser = require('body-parser');

const productRouter = require('./modules/product/product.router');

// Cau hinh view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Cau hinh public static file de su dung trong project . 
// Test : http://localhost:3000/Itatri_portfo.jpg
app.use(express.static('public'));

// Cau hinh body-parser de nhan du lieu tu client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', productRouter);
app.get('/', (req, res) => {
    res.render('index');
});

// Set server chạy trên port 3000
app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});



