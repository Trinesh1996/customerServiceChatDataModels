var mongoose = require("mongoose")
var Schema = mongoose.Schema

var customers = new Schema({
    name: String
    ,surname: String
    ,email: String
    ,contact: String
    ,address:
    {
        street: String
        ,city: String
        ,postal: String
        ,country: String
    }
})

var customersModel = mongoose.model("customers", customers)
module.exports = customersModel