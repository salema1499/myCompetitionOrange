const plantSchema = require("../../db/models/plant.model")
const myHelper = require("../helper")

class Plants{
    static addPlant = async(req,res) => {
        try{
            const addPlant = await plantSchema(req.body).populate("plantId shopId")
            console.log("plants..",addPlant)
             await addPlant.save()
            myHelper.resHandler(res, 200, true, addPlant, " plante  added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static allPlants = async(req,res) => {
        try{
            const allPlants = await plantSchema.find()
          
            myHelper.resHandler(res, 200, true, allPlants, " All Plants....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteAll = async(req,res) => {
        try{
            const delallplants = await plantSchema.deleteMany()
                               
            myHelper.resHandler(res, 200, true, delallplants, " All Plants is deleted....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deletePlant=async(req,res)=>{// to delete this user

        try{
            const plant = await plantSchema.deleteOne({user:req.params.id})
            myHelper.resHandler(res, 200, true,plant,"this plant is deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    
    
}
module.exports = Plants