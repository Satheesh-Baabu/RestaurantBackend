const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('./images'))

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+ '_'+Date.now()+ path.extname(file.originalname))
    }
})

let maxSize = 2*1000 * 1000

let upload=multer(
    {
        storage:storage,
        limits:{
            fileSize:maxSize
        }
    }
)

let uploadHandler=upload.single('file')

app.post('/upload',(req,res)=>{
    uploadHandler(req,res,function(err){
        if(err instanceof multer.MulterError)
        {
            if(err.code=="LIMIT_FILE_SIZE")
            {
                res.status(400).json({message:"Maximum size is 2 Mb"})
               
            }
            return;
        }
        if(!req.file){
            res.status(400).json({message:"No File "})
        }
        else{
            res.status(200).json({message:"Uploaded successfully"})
        }
    })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})