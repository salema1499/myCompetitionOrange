const shopSchema = require("../../db/models/shops.model")
const myHelper = require("../helper")

class Shop{
    static addShop = async(req,res) => {
        try{
            const addShop = new shopSchema(req.body)
            
            await addShop.save()
            myHelper.resHandler(res, 200, true, addShop, " Shop  added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static allShops = async(req,res) => {
        try{
            const allShops = await shopSchema.find()
          
            myHelper.resHandler(res, 200, true, allShops, " All Shops....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteAll = async(req,res) => {
        try{
            const deleteAll = await shopSchema.deleteMany()
                               
            myHelper.resHandler(res, 200, true, deleteAll, " All Shops is deleted....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteShop=async(req,res)=>{// to delete this user

        try{
            const shop = await shopSchema.deleteOne({user:req.params.id})
            myHelper.resHandler(res, 200, true,shop,"this shop is deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    
    
}
module.exports = Shop