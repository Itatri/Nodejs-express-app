// const a = 1;
// const b = 2;
// const c = a + b;
// console.log('Result:',c);

// Khai báo thư viện express
const express = require('express');
// Khởi tạo ứng dụng
const app = express();

// Định nghĩa port
const port = 3000;

//Import thu vien body-parser
const bodyParser = require('body-parser');


// Tiep nhan thong tin 
// Nhan thong tin từ client
// Phan hoi thong tin ve client
// Get method lên server
// Dinh nghia url cho duong dan controller . Vd : /create

const Hello = [
    {
        id: 1,
        name: 'Nguyen Van A'
    },
    {
        id: 2,
        name: 'Nguyen Van B'
    },
    {
        id: 3,
        name: 'Nguyen Van C'
    },
    {
        id: 4,
        name: 'Nguyen Van D'
    }
]

// Cau hinh view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Cau hinh public static file de su dung trong project . 
// Test : http://localhost:3000/Itatri_portfo.jpg
app.use(express.static('public'));

// Cau hinh body-parser de nhan du lieu tu client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // render view index.ejs
    res.render('index');
});


app.get('/detail/:id', (req, res) => {
    const {id }= req.params;
    res.json('Detail id is : ' + Hello.findIndex(item => item.id == id));
});

app.get('/course/:id', (req, res) => {
    // Link test : http://localhost:3000/course/1?name=Nguyen%20Van%20A&page=1
   const {name, page} = req.query;
   const {id} = req.params;
   res.json('Name: ' + name + ' Page: ' + page + ' ID: ' + id);
});
app.post('/create', (req, res)=> {
    const body = req.body;
    res.json(body);
});

app.put('/update', (req, res)=> {
    res.json('Update');
});


app.delete('/delete', (req, res)=> {
    res.json('Delete');
});


// Set server chạy trên port 3000
app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});

// Học tới : Tự Học NodeJS & Express & MongoDB #7 - Mô Hình MVC Là Gì?
