const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    category: { type: String, required: 'name is mandatory' },
    name: { type: String, required: 'name is mandatory' },
    price: { type: Number, required: 'name is mandatory' },
    description: { type: String, required: 'name is mandatory' }
}, { timestamps: true })

const products = mongoose.model('Product',ProductSchema)

module.exports = products