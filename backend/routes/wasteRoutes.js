const express = require("express");
const router = express.Router();
const wastes = require('../models/waste');
const fetchFarmer = require('../middleware/fetchFarmer');

router.post('/postwaste', 
    fetchFarmer, 
    async(req, res)=>{
        try {
            const {name, quantity} = req.body
            const waste = await wastes.findOne({name  : name})
            const temp = waste.quantity + quantity
            await wastes.findOneAndUpdate({name  : name}, {quantity : temp})
        } catch (err) {
            console.log(err);
        }
    }
    )

    module.exports = router;