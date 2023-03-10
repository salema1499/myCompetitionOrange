const userModel = require("../../db/models/user.model")
const urlModel=require("../../db/models/url.smodel")
const myHelper = require("../../app/helper")
const jwt = require("jsonwebtoken")
const auth = async(req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, process.env.tokenPass)
        const userData = await userModel.findOne({
            _id: decodedToken._id,
            "tokens.token": token
        }).populate("roleId")


        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "unauthorized")
    }


}


const authurl=async(req,res,next)=>{
   

    try{
    //const userData = await userModel.findOne()
        
        const userData = await userModel.findOne({
           
            _id: decodedToken._id,
            "tokens.token": token
            }).populate("roleId")
           
       

        
       

        req.user = userData
        req.token = token
        console.log("gogo",userData.roleId)
        next()
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "unauthorized")
    }



}
module.exports = {auth,authurl}