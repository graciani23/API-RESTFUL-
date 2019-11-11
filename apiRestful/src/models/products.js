const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
// 'Product' é o nome do model
// ProductSchema é o novo Schema