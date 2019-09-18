const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Start app
const app = express();
app.use(express.json());
app.use(cors());

// Start DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true,
    useUnifiedTopology: true }
).catch(error => new Promise((resolve, reject) => {
    console.log('MOTHER FUCKERRRRRRRRRRR!!!!')
}));

requireDir('./src/models'); 

// Routes
app.use('/api', require('./src/routes')); 


app.listen(3001);

