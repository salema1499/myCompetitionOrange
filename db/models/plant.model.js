
///////////////////


const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt=require("jsonwebtoken")
// const User = mongoose.model("User", {
const plantsSchema = mongoose.Schema({
    namePlant:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
       
    }, 
    
    
   
    plantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PlantsType",
     },
     shopId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
     },

    
     tokens:[{
        token:{ type:String, required: true}
}]
    
}, {
    timestamps:true
})


plantsSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    delete data.password
    return data
}
plantsSchema.methods.generateToken = async function(){
    const userData = await this.populate("plantId")
    const userData2 = await this.populate("shopId")
    console.log("Data : ", userData);
    const token = jwt.sign({_id: userData._id , typeplant: userData.plantId.typeplant,_id:userData2._id, typeshop:userData2.shopId.typeshop}, process.env.tokenPass)
        userData.tokens = userData.tokens.concat({token})
    // userData.tokens.push({token})
    await userData.save()

    return token
}
const plants = mongoose.model("plants", plantsSchema)
module.exports=plants;