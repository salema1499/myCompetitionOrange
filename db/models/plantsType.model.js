

///////////////////
const mongoose = require("mongoose")
const jwt=require("jsonwebtoken")

// const User = mongoose.model("User", {
const plantsTypeSchema = mongoose.Schema({
  namePlant:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
        required:true
    }, 

    
   
    plantPrice:{
        type: String,
      required: true,
     },
     typeplant:{
        type: String,
      required: true,
     },
     
    
}, {
    timestamps:true
})

plantsTypeSchema.statics.loginrole = async (typePlant) => {
        const plantData = await plantsTypeSchema.findOne({ typePlant });
        if (!plantData) throw new Error("invalid data");
        return plantData;
    };
  



  plantsTypeSchema.methods.generateToken = async function () {
    const plantData = this;
    console.log("test ", process.env.tokenPass);
    const token = jwt.sign({ _id: plantData._id }, process.env.tokenPass);
    plantData.tokens = plantData.tokens.concat({ token });
    // userData.tokens.push({token})
    await plantData.save();
    return token;
  };

  plantsTypeSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    delete data.password
    return data
}

const PlantsType = mongoose.model("PlantsType", plantsTypeSchema)
module.exports=PlantsType