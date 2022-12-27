const router = require("express").Router()

const User = require('../app/controller/user.contoller')
const {auth,authUrl}=require("../app/middleware/auth.middleware")
const {authAdmin}=require("../app/middleware/authAdmin.moddleware")


router.post("/register", User.register)
router.post("/login", User.login)
router.get('/profile/:id',auth, authUrl, User.userProfile )
router.delete('/deleteprofile/:id',auth, User.deleteprofile )
router.get('/allUser',auth,authUrl, User.allusers )
router.patch("/editme/:id",auth,User.editme)
module.exports = router