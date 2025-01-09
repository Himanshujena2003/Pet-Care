import mongoose from "mongoose"

const userBookingSchema = new mongoose.Schema({
    service:{
        type:String,
        require:true
    },
    appointmentDate:{
        type:Date,
        require:true,
    },
    appointmentTime:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
})

let bookings;

function userBookingModel(){
    bookings = mongoose.model("BookingDetail",userBookingSchema)
}

export {userBookingModel,bookings}