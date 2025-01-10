import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userModel } from "./models/user.model.js"
import { userBookingModel } from "./models/bookings.model.js"
import connectDb from "./db/connectdb.js"
import userRouter from "./routes/user.routes.js"

dotenv.config()
const port = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// User Routes
app.use("/user",userRouter)

// Database connection
connectDb()

// Creating collections in database
userModel()
userBookingModel()

app.listen(port,(req,res)=>{
    console.log(`Server is listening on port ${port}`)
})



