const productModel = require('./../models/productModel');
const productModelRegistor = require('./../models/productModelRegistor');

const userData = async (req, res) => {
  var mobileNumber = req.body.mobileNumber;
  const userDetails = await productModelRegistor.findOne({ mobileNumber });
  try {
    const father_name = req.body.father_name;
    const name = req.body.name;
    const mother_name = req.body.mother_name;
    const mobile_number = req.body.mobile_number;
    const date_of_birtday = req.body.date_of_birtday;
    const date_of_join = req.body.date_of_join;
    const gender = req.body.gender;


    const dataOBj = {
      mobileNumber: userDetails.mobileNumber,
      name: name,
      father_name: father_name,
      mother_name: mother_name,
      mobile_number: mobile_number,
      date_of_birtday: date_of_birtday,
      date_of_join: date_of_join,
      gender: gender
    }

    const storeData = await productModel.create(dataOBj);
    res.json({ storeData })
    //console.log(storeData);

  }
  catch (error) {
    next(error)
  }
}


module.exports = { userData }


// onst dataUpdate = async (req, res, next) => {
//   try {
//       const category = req.body.category;
//       const name = req.body.name;
//       const price = req.body.price;
//       const description = req.body.description;

//       const createObj = {
//           category: category,
//           name: name,
//           price: price,
//           description: description
//       }

//       const data = await productModel.findByIdAndUpdate(req.params.id, createObj, { new: true })
//       if (!data) {
//           return res.send('not getting data');
//       } else {
//           res.json({
//               message: 'data was updated',
//               data: data
//           })
//       }
//   } catch (error) {
//       next(error)
//   }