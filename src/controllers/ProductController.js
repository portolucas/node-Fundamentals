const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products).catch(error => new Promise((resolve, reject) => {
            console.log('Não deu')
        }));
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product).catch(error => new Promise((resolve, reject) => {
            console.log('Não deu')
        }));
    },

    async store(req, res) {
      const product = await Product.create(req.body);
      
      return res.json(product).catch(error => new Promise((resolve, reject) => {
        console.log('Não deu')
    }));
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(product).catch(error => new Promise((resolve, reject) => {
            console.log('Não deu')
        }));
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send().catch(error => new Promise((resolve, reject) => {
            console.log('Não deu')
        }));
    }

};