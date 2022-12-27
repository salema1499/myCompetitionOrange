const urlModel = require("../../db/models/url.smodel")
const myHelper = require("../../app/helper")

class Url{

    static addUrl = async(req,res) => {
        try{
            const url = new urlModel(req.body)
            await url.save()
            myHelper.resHandler(res, 200, true, url, "user Role added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports=Url