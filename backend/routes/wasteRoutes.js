const express = require("express");
const router = express.Router();
const wastes = require('../models/waste');
const farmers = require('../models/farmers')
const fetchFarmer = require('../middleware/fetchFarmer');

router.post('/postwaste', 
    fetchFarmer,
    async(req, res)=>{
        try {
            const {name, quantity, price, file} = req.body
            const waste = await wastes.findOne({name : name})
            const farmer = await farmers.findById(req.farmer.id)
            const tokens = farmer.token + 10
            await farmers.findByIdAndUpdate(req.farmer.id, {token : tokens})
            if(!waste){
                const newWaste = {
                    name : name,
                    quantity : quantity,
                    price : price,
                    file : file
                }
                await wastes.create(newWaste)
                res.send("Successfully Created")
            }else{
                const temp = waste.quantity + quantity
                await wastes.findOneAndUpdate({name  : name}, {quantity : temp})
                res.send("Successfully Updates")
            }
        } catch (err) {
            console.log(err);
        }
    }
    )

router.patch('/buywaste',
    async(req, res)=>{
        try{
            const {name, quantity} = req.body
            const waste = await wastes.findOne({name : name})
            if(!waste){
                res.status(404).send({
                    message : "Error"
                })
            }else{
                const temp = waste.quantity - quantity
                await wastes.findOneAndUpdate({name  : name}, {quantity : temp})
                res.send("Successfully Updated")
            }
        }catch(err){
            console.log(err);
        }
    }
)

router.get('/getwaste',
    async(req, res)=>{
        try{
            const waste = await wastes.find({})
            if(!waste){
                res.status(404).send({
                    message : "Error"
                })
            }else{
                res.send(waste)
            }
        }catch(err){
            console.log(err);
        }
    }
)

    module.exports = router;