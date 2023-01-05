const router = require("express").Router()
const Shops = require("../app/controller/shop.controller")



router.post("/addShop",Shops.addShop)
router.get("/allShops",Shops.allShops)
router.delete("/deleteAll",Shops.deleteAll)
router.delete("/deleteShop/:id",Shops.deleteShop)

module.exports=router
