const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt=require("jsonwebtoken")
// const User = mongoose.model("User", {
const shopSchema = mongoose.Schema({
    nameShop:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
        required:true
    }, 
    
    phoneNumshop:{
        type: String,
        validate(value){
            if(!validator.isMobilePhone(value, "ar-EG"))
                throw new Error ("invalid number")
        }
    },
    typeshop:{
        type: String,
      required: true,
     },
     
    
}, {
    timestamps:true
})

shopSchema.statics.loginrole = async (typeshop) => {
    const shopData = await shopSchema.findOne({ typeshop });
    if (!shopData) throw new Error("invalid data");
    return shopData;
  };
  



  shopSchema.methods.generateToken = async function () {
    const shopData = this;
    console.log("test ", process.env.tokenPass);
    const token = jwt.sign({ _id: shopData._id }, process.env.tokenPass);
    shopData.tokens = shopData.tokens.concat({ token });
    // userData.tokens.push({token})
    await shopData.save();
    return token;
  };

shopSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    delete data.password
    return data
}

const Shop = mongoose.model("Shop", shopSchema)
module.exports=Shop
