const mongoose=require('mongoose')

const AddQrSchema = new mongoose.Schema({
  qrname: { type: String, required: true },
  filename: { type: String, required: true },
  active:{type: Number,default:1}
}, { timestamps: true });


const AddQrModel = mongoose.model("QRList", AddQrSchema);

module.exports = AddQrModel;
