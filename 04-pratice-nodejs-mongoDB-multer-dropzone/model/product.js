var mongoose = require('mongoose');
var product = new mongoose.Schema({
    name: String,
    price: Number, 
    image: Array 
}, {collection: 'product'});
module.exports = mongoose.model('product', product);