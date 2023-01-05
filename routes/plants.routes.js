const router = require("express").Router()
const Plants = require("../app/controller/plants.controller")



router.post("/addPlant",Plants.addPlant)
router.get("/allPlants",Plants.allPlants)
router.delete("/deleteAll",Plants.deleteAll)
router.delete("/deletePlant/:id",Plants.deletePlant)

module.exports=router
