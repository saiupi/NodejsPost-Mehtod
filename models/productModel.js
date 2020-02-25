const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    father_name: { type: String, required: 'father_name is mandatory' },
    name: { type: String, required: 'name is mandatory' },
    mother_name: { type: String, required: ' mother_name is mandatory' },
    mobile_number: { type: Number, required: 'mobile_number is mandatory' },
    date_of_birtday: { type: String, required: 'date_of_birtday is mandatory' },
    date_of_join: { type: String, required: 'date_of_join is mandatory' },
    gender: { type: String, required: 'gender mandatory' }

})

const studentdetails   = mongoose.model('studentdetails',ProductSchema)

module.exports = studentdetails  