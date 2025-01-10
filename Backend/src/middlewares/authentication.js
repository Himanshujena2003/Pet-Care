import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const authenticate = (req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer','')

    if(!token){
        return res.status(401).json({message:"Access denied. No token provided"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req._id = decoded._id; // Store decoded _id for further use
        next();
    }
    catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
}

export default authenticate