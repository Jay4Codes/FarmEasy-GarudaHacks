// require('dotenv').config()
const connectToMongo = require('./db')

connectToMongo()

const express = require('express')
const app = express()

app.listen(5000, ()=>{
    console.log("App Started");
})