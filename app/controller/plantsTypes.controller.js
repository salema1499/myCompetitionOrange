const plantsTypesSchema = require("../../db/models/plantsType.model")
const myHelper = require("../helper")

class PlantsType{
    static plantsType = async (req, res) => {
        try {
          const interPlantsType = new plantsTypesSchema(req.body)
         console.log("inter..",interPlantsType)
         interPlantsType.save()
          myHelper.resHandler(
            res,
            200,
            true,
            {interPlantsType},
            "interPlantsType  successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
      

    static allPlantsTypes = async(req,res) => {
        try{
            const allPlantsTypes = await plantsTypesSchema.find()
          
            myHelper.resHandler(res, 200, true, allPlantsTypes, " All PlantType....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteAll = async(req,res) => {
        try{
            const deleteAll = await plantsTypesSchema.deleteMany()
                               
            myHelper.resHandler(res, 200, true, deleteAll, " All PlantType is deleted....")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deletePlantType=async(req,res)=>{

        try{
            const deletePlantType = await plantsTypesSchema.deleteOne({user:req.params.id})
            myHelper.resHandler(res, 200, true,deletePlantType,"this PlantType is deleted")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    
    
}
module.exports = PlantsType