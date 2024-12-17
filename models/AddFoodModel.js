const mongoose=require('mongoose')

const AddFoodSchema = new mongoose.Schema({
  foodname: { type: String, required: true },
  foodtype: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  filename: { type: String, required: true },
});


const AddFoodModel = mongoose.model("FoodList", AddFoodSchema);

module.exports = AddFoodModel;
