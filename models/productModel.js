const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    father_name: { type: String, required: 'father_name is mandatory' },
    name: { type: String, required: 'name is mandatory' },
    fname: { type: String, required: 'fname is mandatory' },
    price: { type: Number, required: 'price is mandatory' },
    description: { type: String, required: 'name is mandatory' }
})

const studentdetails   = mongoose.model('studentdetails',ProductSchema)

module.exports = studentdetails  