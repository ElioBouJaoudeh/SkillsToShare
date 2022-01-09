
const router = require('express').Router();
let User = require('../models/user.model');

bcrypt=require('bcryptjs');
jwt=require('jsonwebtoken');


const signin = async (req,res) => {
    
    const {email, password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(!existingUser) return res.status(404).json({message:"User doesn t exist"});
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid password"});

        const token =jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:"1h"});
        res.status(200).json({result:existingUser,token});

    }catch(error){
            res.status(500).json({message:'sOMETHING WENT WRONG '});
    }
}

const signup = async (req,res) => {
    const {email,password,confirmPassword}=req.body;

    try{
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"User exist"});
        if(password != confirmPassword) return res.status(400).json({message:"Password don t match"});

        const hashedpassword = await bcrypt.hash(password,12);

        const result= await User.create({email,password:hashedpassword});
        const token =jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"});
        res.status(200).json({result,token});
    }catch(error){
        res.status(500).json({message:'sOMETHING WENT WRONG '});
    }
    
}


router.post('/signin',signin);
router.post('/signup',signup);

module.exports = {
    routes: router
}