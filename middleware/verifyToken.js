const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token)
    {
        return res.status(400).json("Request denied")
    }
    try{
        const verified=jwt.verify(token,process.env.SECRET_KEY)
        req.user=verified;
        next();
    }
    catch(err)
    {
        res.status(401).send('Invalid Token')
    }
}

module.exports = verifyToken