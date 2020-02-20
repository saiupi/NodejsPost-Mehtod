const productModel = require('./../models/productModel');


// const getDelete = async(request,responce)=>{
//     const requestId=request.params.id;
//     let contact=productModel.filter(contact=>{
//         return contact._id == requestId
//     })[0];
//     const index=productModel.indexOf(contact);
//     productModel.splice(index,1);
//     responce.json({massage:`user ${requestId} is deleted`});
//   // responce.json(reqestId)
// }

const getDelete = async (req, res, next) => {
  try {
      const data = await productModel.findByIdAndDelete(req.params.id)
      if (!data) {
          return res.send('not getting data');
      } else {
          res.json({
              message: 'data was deleted',
              data: data
          })
      }
  } catch (error) {
      next(error)
  }
}





module.exports={getDelete};