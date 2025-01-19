import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const authenticate = (req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer ', '').trim();

    if(!token){
        return res.status(401).json({message:"Access denied. No token provided"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.fullName = decoded.fullName; // Store decoded _id for further use
        req.email = decoded.email // Store decoded email for further use
        next();
    }
    catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
}

export default authenticate