const router = require("express").Router()
const Roles = require("../app/controller/role.controller")
// const {authrole}=require("../app/middleware/authrole.moddleware")
const {authAdmin}=require("../app/middleware/authAdmin.moddleware")



router.post("/addrole",authAdmin,Roles.addRole)
router.get("/allRoles",authAdmin,Roles.allRoles)
router.delete("/deleteAll",authAdmin,Roles.deleteAll)
router.delete("/deleteme/:id",authAdmin,Roles.deleteme)

module.exports=router
