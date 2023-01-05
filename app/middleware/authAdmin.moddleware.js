const myHelper = require("../../app/helper")
//const jwt = require("jsonwebtoken")
//const urlModel=require("../../db/models/url.smodel")
const userModel = require("../../db/models/user.model")
const authAdmin = async(req, res, next) => {
    try{
       
              
        // if (userModel.roleId === urlModel.roleId ){

        //     next (); 
        // } else {
        //     myHelper.resHandler(res, 500, false, "You have to be admin", "unauthorized")
        // }
    }
    catch(e){
        myHelper.resHandler(res, 500, false, e.message, "unauthorized")
    }
}
module.exports = {authAdmin}