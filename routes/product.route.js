const express = require('express');
const router = express.Router();
const { getAllProduct, 
        getProductById, 
        updateProductById, 
        deleteProductById,
        insertProduct
      } = require('../controller/product.controller')


//route for retreiving the data from the database
router.get('/', getAllProduct);


//route for retreiving the data using id
router.get('/:id', getProductById);


//route for updating the data using id and displaying updated data using the same id
router.put('/:id', updateProductById);


//route for deleting an item from the database using the id
router.delete('/:id', deleteProductById);


//route for inserting the data to the database
router.post('/', insertProduct);

module.exports = router;