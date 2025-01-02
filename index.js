require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const foodRoutes = require('./routes/foodRoutes');
const qrRoutes = require('./routes/qrRoutes');
const dashboardRoutes=require('./routes/dashboardRoutes');
const { menulist } = require('./controllers/mobile/MenulistController');



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./images'));

// Database Connection
connectDB();

// Routes
app.use('', foodRoutes);
app.use('', qrRoutes);
app.use('',dashboardRoutes);
app.use('',menulist)



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




















// const express=require('express')
// const cors=require('cors')
// const bodyParser = require('body-parser')
// const multer = require('multer')
// const path = require('path')
// const mongoose=require('mongoose')
// const AddFoodModel=require('./models/AddFoodModel')
// const AddQrModel = require("./models/AddQrModel");

// const app=express()
// app.use(cors())
// app.use(bodyParser.json())
// app.use(express.static('./images'))



// mongoose.connect("mongodb+srv://satheeshbaabum:admin%40123@user.wvnzk.mongodb.net/restaurant?retryWrites=true&w=majority&appName=User")
// .then(() => console.log("DB Connected"))
// .catch((err) => console.error("DB not connected: ", err));

// let storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./images')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname+ '_'+Date.now()+ path.extname(file.originalname))
//     }
// })

// let maxSize = 2*1000 * 1000

// let upload=multer(
//     {
//         storage:storage,
//         limits:{
//             fileSize:maxSize
//         }
//     }
// )

// let uploadHandler=upload.single('file')

// // app.post('/upload',(req,res)=>{
// //     uploadHandler(req,res,function(err){
// //         if(err instanceof multer.MulterError)
// //         {
// //             if(err.code=="LIMIT_FILE_SIZE")
// //             {
// //                 res.status(400).json({message:"Maximum size is 2 Mb"})
               
// //             }
// //             return;
// //         }
// //         if(!req.file){
// //             res.status(400).json({message:"No File "})
// //         }
// //         else{
// //             res.status(200).json({message:"Uploaded successfully"})
// //         }
// //     })
// // })
// app.post('/qrgenerator', upload.single('file'), async (req, res) => {
//     try {
//       const { qrname } = req.body;
  
//       if (!qrname || qrname.trim() === "") {
//         return res.status(400).json({ message: "QR name is required" });
//       }
  
//       if (!req.file) {
//         return res.status(400).json({ message: "File upload is required" });
//       }
  
//       const filename = req.file.filename;
  
//       // Save to MongoDB
//       const newQr = new AddQrModel({
//         qrname: qrname.trim(),
//         filename,
//       });
  
//       await newQr.save();
//       res.status(201).json({ message: "QR added successfully", Qr: newQr });
//     } catch (error) {
//       console.error("Error saving QR code:", error);
//       res.status(500).json({ error: "Failed to add QR" });
//     }
//   });

// app.post('/addfood', upload.single('file'), async (req, res) => {
//     try {
//       const { foodname, foodtype, price, description } = req.body;
  
//       if (!req.file) {
//         return res.status(400).json({ message: "File upload is required" });
//       }
  
//       const filename = req.file.filename;
  
//       const newFood = new AddFoodModel({
//         foodname,
//         foodtype,
//         price,
//         description,
//         filename, // Save the uploaded file's name
//       });
  
//       await newFood.save();
//       res.status(201).json({ message: 'Food added successfully', food: newFood });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to add food' });
//     }
//   });

// app.get('/foodlist',(req,res)=>
// {
//     AddFoodModel.find()
//     .then((result)=>{res.json(result)})
//     .catch(err=>res.json({error:"Failed to fetch results"}))
// })
// app.put('/foodlist/:id',async(req,res)=>
// {
//   try{
//     const {id}=req.params
//     const {active}=req.body
//     const updatefood =await AddFoodModel.findByIdAndUpdate(
//       id,{active},{new:true}
//     );
//     if(!updatefood)
//     {
//       return res.status(404).json({message:"food not found"})
//     }
//     res.json({ message: "QR updated successfully", qr: updatefood });
//   }
//   catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update Food" });
//   }
// })

// app.get('/qrlist',(req,res)=>
//     {
//         AddQrModel.find()
//         .then((result)=>{res.json(result)})
//         .catch(err=>res.json({error:"Failed to fetch results"}))
//     })
// app.put("/qrlist/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { active } = req.body;
      
//         const updatedQr = await AddQrModel.findByIdAndUpdate(
//             id,
//             { active },
//             { new: true }
//         );
      
//         if (!updatedQr) {
//             return res.status(404).json({ message: "QR not found" });
//         }
      
//         res.json({ message: "QR updated successfully", qr: updatedQr });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to update QR" });
//     }
// });

  


// const PORT = process.env.PORT || 8000;
// app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})