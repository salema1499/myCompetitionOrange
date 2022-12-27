const rout = require("express").Router()
const url = require("../app/controller/url.controll")

rout.post("/addUrl",url.addUrl)


module.exports = rout