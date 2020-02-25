
const productModel = require('./../models/productModelRegistor');
const login = async (req, res) => {
    var mobileNumber=req.body.mobileNumber;
    var password=req.body.password;
    
    const userDetails = await productModel.findOne({mobileNumber, password});

    console.log(req.body);
    console.log(userDetails)

    if(!userDetails || userDetails == null || userDetails == undefined) {
      return res.status(200).json({
        status: 400,
        message: "Invalid details"
      })
    }

    res.status(200).json({
      status: 200,
      message: "Login successfully",
      data:userDetails
    })
}
module.exports = { login }
