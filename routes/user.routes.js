const router = require("express").Router()

const User = require('../app/controller/user.contoller')
const {auth}=require("../app/middleware/auth.middleware")


router.post("/register", User.register)
router.post("/login", User.login)

router.get('/profile/:id',auth, User.userProfile )
router.delete("/deleteAllUsers",User.deleteAll)


router.delete('/deleteprofile/:id',auth, User.deleteprofile )
router.get('/allUser', User.allusers )
router.patch("/editme/:id",auth,User.editme)


module.exports = router   