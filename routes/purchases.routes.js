const router = require("express").Router()
const PurchasesController = require('../app/controller/purchases.controller');

router.post('/add', PurchasesController.addPurchases);
router.get('/all', PurchasesController.listPurchases);
router.get('/user/:userID', PurchasesController.userPurchases);
router.get('/shop/:shopID',PurchasesController.shopPurchases);


module.exports = router;
