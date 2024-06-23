# backened_crud_API


# Node.js CRUD API

This project is a Node.js API that performs CRUD (Create, Read, Update, Delete) operations and interacts with a MongoDB database.

## Table of Contents

- [Features]
- [Prerequisites]
- [Installation]
- [Running the Application]
- [API Endpoints]
- [Environment Variables]
- [Technologies Used]
- [Contributing]


## Features

- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update a product by ID
- Delete a product by ID

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v12 or higher)
- MongoDB instance (local or remote)

## Installation

 Clone the repository:

   ```sh
   git clone https://github.com/akshay2172/Backened_Crud_API.git
   cd Backened_Crud_API

npm install

The API will be accessible at http://localhost:4000

API Endpoints

# Create a Product
. URL: /api/products
. Method: POST
. Request Body:
{
  "name": "Product Name",
  "price": 100,
  "quantity": 10,
  "image": "Image URL"
}

.response
{
  "message": "Product created successfully",
  "product": { ... }
}

# Retrieve All Products
. URL: /api/products
. Method: GET


# Retrieve a Single Product
. URL: /api/products/:id
. Method: GET


# Update a Product
. URL: /api/products/:id
. Method: PUT
. Request Body:{
  "price": 120,
  "quantity": 15
}
. response:{
  "message": "Product updated successfully",
  "product": { ... }
}

# Delete a Product
. URL: /api/products/:id
. Method: DELETE
. Response:{
  "message": "Product deleted successfully"
}

# environment varibales
PORT: The port number on which the server will run (default is 4000).


# Technologies Used

1. Node.js
2. Express.js
3. MongoDB
4. Mongoose
5. Colors (for console logging)
6. Nodemon (for development)


# Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature/YourFeature
5. Open a pull request.

