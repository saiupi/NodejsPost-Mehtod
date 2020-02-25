const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: 'name is mandatory' },
  mobileNumber: { type: Number, required: 'mobileNumber is mandatory' },
  password: { type: String, required: 'password is mandatory' },
    
}, { timestamps: true })

const products    = mongoose.model('products',ProductSchema)

module.exports = products   