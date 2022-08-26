const express = require("express");
const router = express.Router();
const wastes = require('../models/waste');
const farmers = require('../models/farmers')
const fetchFarmer = require('../middleware/fetchFarmer');

router.post('/postwaste', 
    fetchFarmer,
    async(req, res)=>{
        try {
            const {name, quantity, price} = req.body
            const waste = await wastes.findOne({name : name})
            const farmer = await farmers.findById(req.farmer.id)
            const tokens = farmer.token + 10
            await farmers.findByIdAndUpdate(req.farmer.id, {token : tokens})
            if(!waste){
                const newWaste = {
                    name : name,
                    quantity : quantity,
                    price : price
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

    module.exports = router;