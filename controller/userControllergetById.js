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
        const category = req.body.category;
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        const createObj = {
            category : category,
            name : name,
            price: price,
            description : description
        }

        const data = await productModel.findByIdAndUpdate(req.params.id, createObj, { new: true })
        if (!data) {
            return res.send('not getting data');
        } else {
            res.json({
                message: 'data was updated',
                data: data
            })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { getId ,dataUpdate};