const mongoose=require('mongoose')

const SignInSchema=new mongoose.Schema({
    username:{ type: String, required: true },
    password:{type:String,required:true},

},{timestamps:true})

const SignInModel=mongoose.model("AdminUsers",SignInSchema);
module.exports = SignInModel;