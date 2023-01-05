const router = require("express").Router()
const PlantsType = require("../app/controller/plantsTypes.controller")



router.post("/plantsType",PlantsType.plantsType)
router.get("/allPlantsTypes",PlantsType.allPlantsTypes)
router.delete("/deleteAll",PlantsType.deleteAll)
router.delete("/deletePlantType/:id",PlantsType.deletePlantType)

module.exports=router
