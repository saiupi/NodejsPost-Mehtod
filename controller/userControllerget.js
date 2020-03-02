const productModel = require('./../models/productModel');

const getData = async(req, res)=>{
    
    productModel.find({},(err,data)=>{
        if(err){
            res.status.apply(400).json(err);

        }
        res.json({data})
    })
}
// const getMobileNumber = async(req, res)=>{
//     var mobileNumber=req.body.mobileNumber;
//    await productModel.find(mobileNumber,(err,data)=>{
//         if(err){
//             res.status.apply(400).json(err);

//         }
//         res.json({data})
//     })
// }
const getMobileNumber = async (req, res, next) => {
    
    try {
       // const data = await productModel.find({})
       var mobileNumber = req.params.mobileNumber;
    const data = await productModel.find({mobileNumber});
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
module.exports={getData,getMobileNumber};