const mongoose = require('mongoose');

const ProdutSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: true,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

//Check what is timestamps used for 


const Product = mongoose.model("Product",ProdutSchema);

module.exports = Product;