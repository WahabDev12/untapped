const express = require("express");
const router = express.Router();
const {check,validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config")
const jwtToken = "OnePiece"
const User = require('../models/UserSchema')


router.post("/", [
   check("firstName","Please enter your first name").not().isEmpty(),
   check("lastName","Please enter your last name").not().isEmpty(),
   check("email","Please enter a valid email").isEmail(),
   check("password","Please enter a valid password").isLength({min:6})
] ,async (req,res) => {
    // res.send(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: errors.array()})
    }

    // res.send("Passed")
    const {firstName,lastName,email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"User already exist"});
        }
        else{
             user = new User({
                 firstName,
                 lastName,
                 email,
                 password
             })
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        
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

        await user.save();
        return res.send("User created")
    }
    catch(error){
        console.log(error.message);
        return res.status(400).send("User not created")
    }
})

module.exports = router;