<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Products RESTful API](#products-restful-api)
  - [Provided Data](#provided-data)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setting Up the Project](#setting-up-the-project)
    - [Running the Project](#running-the-project)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Products RESTful API

This project is a RESTful API built using Express.js and PostgreSQL to manage a collection of products. The API allows clients to perform CRUD (Create, Read, Update, Delete) operations on products stored in a PostgreSQL database.

## Provided Data

The PostgreSQL `products` table contains the following fields:

- `id`: integer (auto-incremented primary key)
- `productThumbnail`: URL of the product's thumbnail image (string, NOT NULL)
- `productTitle`: Title of the product (string, NOT NULL)
- `productDescription`: Description of the product (string, NOT NULL)
- `productCost`: Cost of the product (decimal, NOT NULL)
- `onOffer`: Boolean indicating whether the product is on offer or not (boolean, NOT NULL)

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running

### Setting Up the Project

1. **Install the necessary dependencies:**

   ```bash
   npm install
   ```

   install : nodemon, pg and express.

### Running the Project

Assuming you have downloaded the sql starter code and created the table in the workbench.

2. **Test the API endpoints using Insomnia, Postman, or curl:**

   - **Get all products:**

     ```
     GET http://localhost:3000/products
     ```

   - **Get a single product by ID:**

     ```
     GET http://localhost:3000/products/:id
     ```

   - **Create a new product:**

     ```
     POST http://localhost:3000/products
     ```

     Request body example:

     ```json
     {
       "productThumbnail": "http://example.com/image.jpg",
       "productTitle": "New Product",
       "productDescription": "Description of the new product",
       "productCost": 19.99,
       "onOffer": true
     }
     ```

   - **Update a product by ID:**

     ```
     PUT http://localhost:3000/products/:id
     ```

     Request body example:

     ```json
     {
       "productThumbnail": "http://example.com/updated-image.jpg",
       "productTitle": "Updated Product",
       "productDescription": "Updated description of the product",
       "productCost": 29.99,
       "onOffer": false
     }
     ```

   - **Delete a product by ID:**
     ```
     DELETE http://localhost:3000/products/:id
     ```
