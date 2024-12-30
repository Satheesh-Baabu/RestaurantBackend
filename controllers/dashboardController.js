const SignInModel =require('../models/SignInModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretkey = process.env.SECRET_KEY;

exports.signin=async(req,res)=>{
    
    try{
        const {username,pass}=req.body;
        // console.log(req.body)
        const hashpass=await bcrypt.hash(pass,10)
        const users=new SignInModel({
            username:username,
            password:hashpass
        })
        await users.save()
        res.status(200).json("User created successfully")
        console.log(users)
    }
    catch(err)
    {
        res.status(500).json("Error in create user")
    }
}

exports.login=async(req,res)=>{
    try{
        
        const {username,pass}=req.body;
        const user=await SignInModel.findOne({username:username})
        console.log(user)
        if(!user) 
            return res.status(401).json("No user found")

        const validatePassword= await bcrypt.compare(pass,user.password)
        console.log(validatePassword)
        if(!validatePassword)
            return res.status(401).json("Password is incorrect")
        const token=jwt.sign({username:user.username},secretkey)
        console.log(token)
        res.status(200).json({ token });
    }
    catch(err){
        res.status(500).json("Failed to Login")
    }
}

exports.dashboard=async(req,res)=>{
    res.send(`Welcome ${req.user.username}`)

}