const userModel = require("../../db/models/user.model")
const urlModel = require("../../db/models/url.smodel")

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
        console.log(req.user.roleId)

        next()
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "unauthorized")
    }
}
const authUrl = async(req, res, next) => {
 try{
    console.log(req.url)
    console.log(req.params)

    console.log(req.user.roleId)
    const URL = await urlModel.findOne({
        link:req.url,
        method:req.method,
        "Roles.roleId":req.user.roleId

     })
     console.log(URL)
     if (!URL) throw new Error("not admin")
     next()

 }catch(e){
    myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin")
}

}
module.exports = {auth,authUrl}