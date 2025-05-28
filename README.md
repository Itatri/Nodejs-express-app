# Node.js Express Product Management Application

A web application built with Node.js and Express.js for managing products with categories.

## Features

- Product Management
  - View list of products
  - Create new products
  - Update existing products
  - Delete products
  - View product details
- Category Management
  - View list of categories
  - View category details
- Modern UI with responsive design

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **Frontend:**
  - EJS (Embedded JavaScript templating)
  - CSS
  - JavaScript (Vanilla)

## Prerequisites

Before running this application, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Nodejs-express-app
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your local machine

4. Start the application:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── modules/
│   ├── product/
│   │   ├── product.controller.js
│   │   └── product.router.js
│   └── category/
│       ├── category.controller.js
│       └── category.router.js
├── models/
│   ├── product.model.js
│   └── category.model.js
├── views/
│   ├── product/
│   │   ├── index.ejs
│   │   ├── create.ejs
│   │   └── detail.ejs
│   └── index.ejs
├── public/
│   ├── css/
│   └── image/
├── index.js
└── database.js
```

## API Endpoints

### Products

- `GET /products` - Get all products
- `GET /products/detail/:id` - Get product details
- `GET /api/products/detail/:id` - Get product details (API)
- `POST /products/create` - Create new product
- `PUT /products/edit/:id` - Update product
- `DELETE /products/detail/:id` - Delete product

### Categories

- `GET /category` - Get all categories
- `GET /category/detail/:id` - Get category details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
