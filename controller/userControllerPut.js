
const productModel = require('./../models/productModel');

// const gePut = async (request, responce) => {
//     const requestId = request.params._id;
//     let contact = productModel.filter(contact => {
//         return contact._id == requestId
//     })[0];
//     // let contact=contacts.filter(contact=>{
//     //     return contact.id==reqestId;
//     // });
//     // responce.json(contact[0]);
//     const index = productModel.indexOf(contact);
//     const keys = Object.keys(request.body);
//     keys.forEach(key => {
//         contact[key] = request.body[key];
//     });
//     productModel[index] = contact;
//     responce.json(productModel[index]);
//}
const dataUpdate = async (req, res, next) => {
    try {
        const category = req.body.category;
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        const createObj = {
            category: category,
            name: name,
            price: price,
            description: description
        }

        const data = await productModel.findByIdAndUpdate(req.params.id,createObj, { new: true })
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


module.exports={dataUpdate};