const PurchasesModel = require('../../db/models/purchases.model');
const MyHelper = require('../helper');

class Purchases { 
    static addPurchases = (req,res) => {
        try{

            const purchases = new PurchasesModel(req.body); 
            purchases.save();
            res.status()
            MyHelper.resHandler(
                res,
                200,
                true,
                {purchases},
                "purchases  successfully"
              );
            } catch (e) {
              MyHelper.resHandler(res, 500, false, e, e.message);
            }
    }

    static listPurchases =  async (req,res) => {
        try{
        const all = await  PurchasesModel.find();
        MyHelper.resHandler(
            res,
            200,
            true,
            all,
            "all purchases listed succefully"
        )
        } catch (e) {
            MyHelper.resHandler(res, 500, false, e, e.message);
        }
    }

    static userPurchases = async (req,res) => {
        try { 
            const all = await PurchasesModel.find({user : req.params.userID}); 
            MyHelper.resHandler(
                res,
                200,
                true,
                all,
                "user purchases listed succefully"
            )

        } catch (e) {
            MyHelper.resHandler(res, 500, false, e, e.message);
        }
    }

    static shopPurchases = async (req,res) => {
        try { 
            const all = await PurchasesModel.find({shop : req.params.shopID}); 
            MyHelper.resHandler(
                res,
                200,
                true,
                all,
                "shop purchases listed succefully"
            )

        } catch (e) {
            MyHelper.resHandler(res, 500, false, e, e.message);
        }
    }
}

module.exports = Purchases;