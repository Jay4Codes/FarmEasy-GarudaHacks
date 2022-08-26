// require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const bodyParser = require('body-parser');

connectToMongo()

const app = express()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

//required middleware if you want to use req.body
app.use(bodyParser.json({ limit: '300mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '300mb', extended: true }))
app.use(express.json())

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use('/api/farmer', require('./routes/farmerRoutes'))
app.use('/api/waste', require('./routes/wasteRoutes'))
app.use('/api/product', require('./routes/productRoutes'))
app.use('/api/buyer', require('./routes/buyerRoutes'))

app.listen(5000, ()=>{
    console.log("App Started");
})