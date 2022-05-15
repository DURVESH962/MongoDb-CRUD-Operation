const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://durvesh:1234567890@cluster0.p6erb.mongodb.net/EmpApp?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) console.log("Error",err)
    console.log("MongoDb connected")
})