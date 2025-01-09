import jwt from "jsonwebtoken"

const authenticate = (req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer','')

    if(!token){
        return res.status(401).json({message:"Access denied. No token provided"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.userId = decoded.userId; // Store decoded userId for further use
        next(); // Proceed to next middleware or route handler
    }
    catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
}

export default authenticate