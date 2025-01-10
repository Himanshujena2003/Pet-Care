import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDb = async()=>{
    try{
        mongoose.connect(`${process.env.MONGO_URL}/petcare`)
    }
    catch(error){
        console.log("ERROR: ",error)
        throw err
    }
}

export default connectDb

