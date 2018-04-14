var mongoose = require("mongoose");

var StockSchema = mongoose.Schema({
    name : String,
    v1 : Number,
    v2 : Number,
    v3 : Number

})

module.exports = mongoose.model('Stock',StockSchema)