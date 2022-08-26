const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://GarudaHacks:GarudaHacks@cluster0.d6vtzb0.mongodb.net/test?retryWrites=true&w=majority'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Succesfully connected to database");
    })
}
module.exports = connectToMongo