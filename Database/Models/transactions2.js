const mongoose = require('mongoose')

 const TransactionSchema = new mongoose.Schema({
    slno: Number,
    TransactionID: Number,
    TransactionType : String,
    Amount: Number,
    createdAt: {
       type: Date,
       default: new Date()
    }
 })

 const Transi = mongoose.model('Transi',TransactionSchema)

 module.exports = Transi