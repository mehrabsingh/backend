const mongoose = require('mongoose')
const Book=require('../models/Books')

exports.createBook=async(Data)=>{
    return await Book.create(Data) 
}

exports.getBook=async()=>{
    return await Book.find()
}