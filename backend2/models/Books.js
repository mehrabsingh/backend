const mongoose = require ('mongoose')
const Books = new mongoose.Schema({
    Name: {type:String },
    Author:{type:String},
    Price:{type:Number},
    Description:{type:String}
}) 

module.exports = mongoose.model('Book', Books)