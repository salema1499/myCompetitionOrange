const userRole = require("../../db/models/quiafication.model")
const myHelper = require("../helper")

class Role{
    static addquaifcation = async(req,res) => {
        try{
            const addrole = new userRole(req.body)
            
            await addrole.save()
            myHelper.resHandler(res, 200, true, addrole, " User quaification added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    // static loginRole = async(req,res) => {
    //     try{

    //         const addrole = await userRole.loginrole( req.body.userType)
    //         const token = await addrole.generateToken()
         
    //         myHelper.resHandler(res, 200, true, {user:addrole,token}, "user added successfully")
    //     }
    //     catch(e){
    //         myHelper.resHandler(res, 500, false, e, e.message)
    //     }
    // }
    static allquaifcation = async(req,res) => {
        try{
            const allroles = await userRole.find()
          
            myHelper.resHandler(res, 200, true, allroles, " All Roles....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteAll = async(req,res) => {
        try{
            const allroles = await userRole.deleteMany()
                               
            myHelper.resHandler(res, 200, true, allroles, " All Roles is deleted....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deletequalification=async(req,res)=>{// to delete this user

        try{
            const user = await userRole.deleteOne({user:req.params.id})
            myHelper.resHandler(res, 200, true,user,"this user is deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    
    
}
module.exports = Role