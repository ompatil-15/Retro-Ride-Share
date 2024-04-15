const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://vishalpatil:vishal123@cluster0.sm72w2k.mongodb.net/retro-ride-share' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose