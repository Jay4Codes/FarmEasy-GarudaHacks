const express = require("express");
const products = require("../models/products");
const router = express.Router();

router.post('/addproduct', 
async(req, res)=>{
  let success = false;
//   const errors = validationResult(req);
//   if(!errors.isEmpty()){
//     res.status(400).json({success, errors : errors.array()})
//   }
    try{

      let product = await products.create({
        name : req.body.name,
        type : req.body.type,
        desc : req.body.desc,
        tokenprice: req.body.tokenprice  
      })

      const data = {
        product: {
          id:product.id
        }
      }

      success = true
      res.json({success, data})
    }catch(err){
      console.log(err);
      res.json({status : 'error', error : err})
    }
  })


router.get('/getallproducts', 
async(req, res)=>{
    try{
        const allproducts = await products.find()
        res.json(allproducts)
    }catch(err){
      console.log(err);
      res.json({status : 'error', error : err})
    }
})

 
  module.exports = router;