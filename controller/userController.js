const productModel = require('./../models/productModel');

const userData = async(req, res)=>{
  const category = req.body.category;
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;

  const dataOBj = {
      category : category,
      name : name,
      price: price,
      description : description
  }

  const storeData = await productModel.create(dataOBj);
console.log(storeData);


}

module.exports = { userData }