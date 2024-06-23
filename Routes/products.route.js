// import express from 'express'
import { Router } from 'express';
import { getAllProducts, getSingleProductById, createProduct, updateProduct, deleteProduct } from '../Controllers/products.controllers.js';

const router = Router();



// GET ALL PRODUCTS USING GET

router.get('/', getAllProducts)
//GET A SINGLE PRODUCT USING GET AND ID

router.get('/:id', getSingleProductById)

//CREATING A PRODUCT USING POST

router.post('/', createProduct)

//UPDATING A PRODUCT USING PATCH 

router.patch('/:id', updateProduct)
  //DELETING A PRODUCT USING DELETE

  router.delete('/:id', deleteProduct)

  export default router;


