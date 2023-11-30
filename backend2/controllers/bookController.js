const mongoose = require('mongoose')
const express = require('express')
const bookServices=require('../Services/bookServices');
const Books = require('../models/Books');


exports.createBook=async(req, res)=>{
    const inputData=req.body;
    console.log('inputData',inputData);
    const details=await bookServices.createBook(inputData);
    console.log('details', details);
}

exports.getBook=async(req,res)=>{
    const data=await Books.find();
    res.status(200).json({data:data});
}

exports.updateProduct=async(req,res)=>{
    await Books.updateOne({price: 379}, {
        $set:{
            name: req.body.maker
        }
    });
    res.status(200).json({
        message: "Product updated"
    })
}

exports.deleteProduct=async(req,res)=>{
    await Products.deleteMany({name:"Manjot"});
    res.status(200).json({
        message:"Product deleted"
    })
}

