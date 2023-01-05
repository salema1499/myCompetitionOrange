const router = require("express").Router()
const Roles = require("../app/controller/quaification.controller")



router.post("/addQuaification",Roles.addquaifcation)
router.get("/allQuaification",Roles.allquaifcation)
router.delete("/deleteAll",Roles.deleteAll)
router.delete("/deletequalification/:id",Roles.deletequalification)

module.exports=router
