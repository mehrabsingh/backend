const mongoose = require('mongoose')
const express = require('express')

const router = express.Router();

const bookController = require('../controllers/bookController')

router.post('/create-book',bookController.createBook);
router.get('/get-book',bookController.getBook);
router.put('/update-book',bookController.updateBook);
router.delete('/delete-book', bookController.deleteBook);

module.exports=router;