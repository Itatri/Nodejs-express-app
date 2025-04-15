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

// Get method lên server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Set server chạy trên port 3000
app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});

