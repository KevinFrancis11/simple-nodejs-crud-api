const Product = require('../models/product.model');

//method for retreiving the data from the database
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//method for retreiving the data using id
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const productById = await Product.findById(id);
        res.status(200).json(productById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//method for updating the data using id and displaying updated data using the same id
const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const productUpdatedById = await Product.findByIdAndUpdate(id, req.body);
        if (!productUpdatedById) {
            return res.status(404).json({ message: "Product is not found, please provide the correct id of the product" });
        }

        const productById = await Product.findById(id);
        res.status(200).json(productById);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//method for deleting an item from the database using the id
const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            res.status(404).json({ message: "Product not found, please provide a valid product id!!" });
        }
        res.status(200).json({ message: "Product has been deleted successfully." });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//method for inserting the data to the database
const insertProduct = async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    insertProduct
};