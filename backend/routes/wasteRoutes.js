const express = require("express");
const router = express.Router();
const wastes = require('../models/waste');
const fetchFarmer = require('../middleware/fetchFarmer');

router.post('/postwaste', 
    // fetchFarmer, 
    async(req, res)=>{
        try {
            const {name, quantity} = req.body
            console.log(name);
            const waste = await wastes.findOne({name : name})
            console.log(waste);
            console.log(waste.quantity);
            // const temp = waste.quantity + quantity
            await wastes.findOneAndUpdate({name  : name}, {quantity : quantity})
            res.send("Success")
        } catch (err) {
            console.log(err);
        }
    }
    )

    module.exports = router;