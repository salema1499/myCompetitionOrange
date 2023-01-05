const mongoose = require("mongoose")

const purchaseSchema = mongoose.Schema({
    planet: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"plants"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }, 
    shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Shop'
    }
})

const Purchases = mongoose.model("Purchases", purchaseSchema)
module.exports=Purchases