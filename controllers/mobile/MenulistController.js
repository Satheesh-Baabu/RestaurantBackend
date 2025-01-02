const AddFoodModel = require("../../models/AddFoodModel")

exports.menulist=async(req,res)=>{
    try{
        const menus=await AddFoodModel.find();
        res.json(menus)
    }
    catch(err)
    {
        res.status(500).json("Error in menulist")
    }
}