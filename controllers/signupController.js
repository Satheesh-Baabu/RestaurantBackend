const bcrypt=require('bcrypt');

exports.signup=async(req,res)=>
{
    try{
        const {username,password}=req.body;
        const encrpass=await bcrypt(password,10)
    }
    catch(err)
    {
        console.log("Error in signup")
    }
}