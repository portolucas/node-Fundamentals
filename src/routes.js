const express = require('express');
const routes = express.Router();

// First route
const ProductConstroller = require('./controllers/ProductController');

routes.get('/products', ProductConstroller.index);
routes.post('/products', ProductConstroller.store);
routes.get('/products/:id', ProductConstroller.show);
routes.put('/products/:id', ProductConstroller.update);
routes.delete('/products/:id', ProductConstroller.destroy);



module.exports = routes;