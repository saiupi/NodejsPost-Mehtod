const productModel = require('./../models/productModel');

const getData = async(req, res)=>{
    productModel.find({},(err,data)=>{
        if(err){
            res.status.apply(400).json(err);

        }
        res.json({data})
    })
}


module.exports={getData};