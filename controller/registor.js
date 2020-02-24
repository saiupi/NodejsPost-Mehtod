const productModel = require('./../models/productModelRegistor');

const registor = async(req, res)=>{
  try {
 
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const dataOBj = {
 
      name : name,
      email:email,
      password: password,
    
  }

  const registorData = await productModel.create(dataOBj);
  res.json({registorData,
    status:200,
    message:'Registor is succssfully'})
//console.log(storeData);

}
catch (error) {
      next(error)
  }
}


module.exports = { registor }