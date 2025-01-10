import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDb = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}petcare`)
        console.log("Connection successfully established")
    }
    catch(error){
        console.log("ERROR: ",error)
        throw err
    }
}

export default connectDb

