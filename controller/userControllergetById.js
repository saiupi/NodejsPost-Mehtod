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
        const fname = req.body.fname;
        const price = req.body.price;
        const description = req.body.description;
        console.log(req.body.category)

        const createObj = {
            father_name: father_name,
            name: name,
            fname:fname,
            price: price,
            description: description
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

module.exports = { getId ,dataUpdate};