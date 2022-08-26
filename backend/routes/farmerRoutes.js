const express = require("express");
const farmers = require("../models/farmers");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchFarmer = require('../middleware/fetchFarmer')

router.post('/register', 
[
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
],
async(req, res)=>{
  let success = false;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).json({success, errors : errors.array()})
  }
    try{
      let farmer = await farmers.findOne({email : req.body.email});

      if(farmer){
        res.status(400).json({success, error:"Email ID already used"})
      }

      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)

      farmer = await farmers.create({
        name : req.body.name,
        email : req.body.email,
        password : secPass,
        address: req.body.address,
        phone : req.body.phone,
        token: 0
  
      })
      const data = {
        farmer: {
          id:farmer.id
        }
      }

      const authToken = jwt.sign(data, "jainamshah");

      success = true
      res.json({success, authToken})
    }catch(err){
      console.log(err);
      res.json({status : 'error', error : err})
    }
  })

  router.post('/login',
  [
    body("email").isEmail(),
    body("password", 'password cannot be blank').exists(),
  ],
  async(req, res)=>{
    let success = false
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(400).json({result}, {erros : errors.array()})
    }

    try{
      let farmer = await farmers.findOne({ email : req.body.email})
      if(!farmer){
        res.status(400).json({success, error: "Enter valid credentials"})
      }

      const passwordCompare =  await bcrypt.compare(req.body.password, farmer.password)

      
      if (!passwordCompare){
        success = false
        res.status(400).json({success, error: "Enter valid credentials"})
      }

      const data = {
        farmer: {
          id:farmer.id
        }
      }
  
      const authtoken = jwt.sign(data, "jainamshah")
      success = true
      res.json({success, authtoken});

    }catch (err){
      console.log(err.message);
      res.status(500).send("Some error occured")
    }
  } 
  )

  
 
  module.exports = router;