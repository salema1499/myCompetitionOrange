const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt=require("jsonwebtoken")
// const User = mongoose.model("User", {
const userSchema = mongoose.Schema({
    fName:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
        required:true
    }, 
    lName:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
        required:true
    }, 
    age:{
        type:Number,
        min:21,
        max:60,
        default:21
    }, 
    email:{
        type:String, 
        trim:true,
        lowercase:true,
        required:true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email format")
            }
        }
    }, 
   
    password:{
        type:String, 
        trim:true,
        minLength: 5,
        required:true,
        // match: ''
    }, 
    gender:{
        type:String, 
        trim:true,
        lowercase:true,
        enum: ["male", "female"]
    }, 
    
    phoneNum:{
        type: String,
        validate(value){
            if(!validator.isMobilePhone(value, "ar-EG"))
                throw new Error ("invalid number")
        }
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
     },
     tokens:[{
        token:{ type:String, required: true}
}]
    
}, {
    timestamps:true
})
userSchema.pre("save", async function(){
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password, 8)
    }
})
userSchema.statics.loginUser = async(email, password) => {
    const userData = await User.findOne({email})
    if(!userData) throw new Error("invalid email")
    const validatePassword = await bcryptjs.compare(password, userData.password)
    if(!validatePassword) throw new Error("invalid password")
    return userData
}
userSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    delete data.password
    return data
}
userSchema.methods.generateToken = async function(){
    const userData = await this.populate("roleId")
    const userData2 = await this.populate("shopId")
    console.log("Data : ", userData);
    const token = jwt.sign({_id: userData._id , userType: userData.roleId.userType,_id:userData2._id, typeshop:userData2.shopId.typeshop}, process.env.tokenPass)
        userData.tokens = userData.tokens.concat({token})
    // userData.tokens.push({token})
    await userData.save()

    return token
}
const User = mongoose.model("User", userSchema)
module.exports=User;