const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express();
const PORT = 3000;

//using middleware for parsing json in express,because express doesnt allow to pass json through our node js by default
app.use(express.json());
//another middleware for senting form type of data urlEncoded
app.use(express.urlencoded({extended: false}));
//custom middleware for getting the route
app.use('/api/products',productRoutes);




//route 
app.get('/', (req, res) => {
    res.send("hello from my first node api")
})



//Databse connection and port assignment
mongoose.connect("mongodb+srv://kevinfrancisds24:pdQGYIjkgS3SlvU2@backenddb.2sbd4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Database connected");

        //assignment of port and starting the server 
        app.listen(PORT, () => {
            console.log(`The server is started at port: ${PORT}`);
        })
    })
    .catch((e) => {
        //catching and printing the error if anything goes bad.
        console.log("Connection failed");
        console.log(e);
    })




