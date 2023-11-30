const express = require('express')
const app = express();
const moongose = require('mongoose')
const BookData = require('./models/Books')
const BookController = require('./controllers/bookController')
const BookRoutes = require('./Routes/bookRoutes')
const dB = require('./middlewares/dB') 

app.use(express.json())
dB.connectToDB();

app.use('/books',BookRoutes)


app.get('/',(req, res)=>{
    res.send(`Hello I am Singh `)
})

app.post('/home',(req, res)=>{
    const inputData = req.body
    const createData = BookData.create(inputData)
    res.status(200).json(inputData)
})

app.listen(3500,()=>{
    console.log('Server is Started on 3500');
})


