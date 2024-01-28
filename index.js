const express= require('express')
const app = express()
app.use(express.json())
const Article = require ('./models/Article.js')
const mongoose = require('mongoose')


//ربط الموقع بقاعدة البيانات
mongoose.connect("mongodb+srv://Sousou:Sousou12@cluster0.3ftiagc.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('connected is saccussfully')
}).catch((Error)=> console.log('error'))

app.get('/art',async(req,res)=>{
    const art = await  Article.find()
    res.json(art)
})










//get HTML page

//detete post in database

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(3000,()=>{
    console.log('hello soufiane')
})
 