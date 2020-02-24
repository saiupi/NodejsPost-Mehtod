const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: 'father_name is mandatory' },
  email: { type: String, required: 'name is mandatory' },
  password: { type: String, required: 'price is mandatory' },
    
}, { timestamps: true })

const products    = mongoose.model('products',ProductSchema)

module.exports = products   