const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtToken = "OnePiece"
const {check,validationResult} = require("express-validator");
const User = require('../models/UserSchema');
const login = require("../middleware/login")


router.get("/",login,async (req,res)=>{
       try{
           const user = await User.findById(req.user.id).select("-password");
           res.json({user})

       }
       catch(error){
           console.log(error.message)
           return res.json({msg:"Server error"})
       }
})


router.post("/",[
    check("email","Please enter a valid email").isEmail(),
    check("password","Invalid password").exists()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: errors.array()})
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
       if(!user){
           return res.status(400).json({msg:"User not found"})
       }

       const isMatch = await bcrypt.compare(password,user.password);
    
       if(!isMatch){
           return res.status(400).json({msg:"Invalid credentials"})
       }
         const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,jwtToken,{
            expiresIn:360000,

        },(error,token)=>{
            if(error){
                throw error
            }
            else{
                res.json({token})
            }
        })
    }

     catch(error){
        console.log(error.message);
        return res.status(500).send("Server error")
    };

})


module.exports = router;