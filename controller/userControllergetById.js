const productModel = require('./../models/productModel');


const getId = async (req, res, next) => {
    try {
        const data = await productModel.findById(req.params.id)
        if (!data) {
            return res.send('not getting data');
        } else {
            res.json({
                message: 'data was getting',
                data: data
            })
        }
    } catch (error) {
        next(error)
    }
}

const dataUpdate = async (req, res, next) => {
    try {
        const father_name = req.body.father_name;
        const name = req.body.name;
        const mother_name = req.body.mother_name;

        const mobile_number = req.body.mobile_number;
        const date_of_birtday = req.body.date_of_birtday;
        const date_of_join = req.body.date_of_join;

        const gender = req.body.gender;

        const createObj = {
            name: name,
            father_name: father_name,
            mother_name: mother_name,
            mobile_number: mobile_number,
            date_of_birtday: date_of_birtday,
            date_of_join: date_of_join,
            gender: gender
        }

        const data = await productModel.findByIdAndUpdate(req.params.id, createObj, { new: true })
        if (!data) {
            return res.send('not getting data');
        } else {
            res.json({
                message: 'data was updated',
                data: data
            })
            console.log(req.body.father_name)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { getId, dataUpdate };