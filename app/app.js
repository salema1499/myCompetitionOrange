const express = require("express")
const app = express()

require("../db/connect")

app.use(express.json())

const userRoutes = require("../routes/user.routes")
const quaificationRoutes=require("../routes/quailfication.routes")
const shopsRoutes=require("../routes/shop.routes")
const plantsRoutes=require("../routes/plants.routes")
const plantsTypeRoutes=require("../routes/plantsTypes.routes");
const purchasesRoutes = require("../routes/purchases.routes");

//const postRoutes = require("../routes/post.routes")
app.use("/api/user/",  userRoutes)
app.use("/api/quailfication/",  quaificationRoutes)
app.use("/api/shop/",  shopsRoutes)
app.use("/api/plant/",  plantsRoutes)
app.use("/api/plantsType/",  plantsTypeRoutes);
app.use("/api/purchases", purchasesRoutes);
//app.use("/api/post/", postRoutes)
app.all("*", (req, res)=> {
    res.status(404).send({
        apisStatus:false,
        message:"Invalid URL",
        data: {}
    })
})
module.exports=app