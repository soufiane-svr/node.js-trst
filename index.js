const express= require('express')
const app = express()
app.use(express.json())
const Article = require ('./models/Article.js')
const mongoose = require('mongoose')
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//ربط الموقع بقاعدة البيانات
mongoose.connect("mongodb+srv://Sousou:Sousou12@cluster0.3ftiagc.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('connected is saccussfully')
}).catch((Error)=> console.log('error'))

//Send and save information for database and create new poste in postman 

//Get information for database ('it's perfect id')
app.get('/article',async(req,res)=>{
    const Database = await Article.find()
    res.json(Database) 
})


//test requise of postmain
app.post('/posted',async(req,res)=>{
    art = new Article
    art.title = req.body.name
    art.body = req.body.city
    art.numberOfLike = req.body.number
     art.save()
    
     await  res.send('hello world')
})

app.get('/anahada',(req,res)=>{
    res.send('tarararar')
})
//




//mongodb+srv://Sousou:<password>@cluster0.3ftiagc.mongodb.net/?retryWrites=true&w=majority


app.get('/ab',async(req,res)=>{
    art =await Article.find()
    res.render('index.ejs',{
        arab : art
    })
})

//get HTML page

//detete post in database
app.delete('/getid/:articleid',async(req,res)=>{
    id = req.params.articleid
    post = await Article.findByIdAndDelete(id)
    res.json(post)
})
app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(3000,()=>{
    console.log('hello soufiane')
})
 