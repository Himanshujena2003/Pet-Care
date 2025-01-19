import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import {user} from "../models/user.model.js"
import {bookings} from "../models/bookings.model.js"
import zod from "zod"
dotenv.config()

const signupBody = zod.object({
    fullName:zod.string(),
    phone:zod.string(),
    email:zod.string().email(),
    password:zod.string()
})


// SignUp 
const registerUser = async(req,res)=>{

    const userCorrect = signupBody.safeParse(req.body)

    if(userCorrect){
        const userData = req.body;
        const isEmail = await user.findOne({email:userData.email})
        const isPhone = await user.findOne({phone:userData.phone})

        if(isEmail && isPhone){
            res.json({message:'You have already registered with this email or phone number'})
        }
        else if(isEmail) res.json({message:'Email already taken'});
        else if(isPhone) res.json({message:'Phone no. already taken'});

        else{
            const token = jwt.sign(
                {
                    fullName:userData.fullName,
                    email:userData.email,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:process.env.TOKEN_EXPIRY
        
                }
            )
            userData.phone=Number(userData.phone)
            userData.password = await bcrypt.hash(userData.password,10)
            const newUser = await new user(userData)
            await newUser.save();
            res.json({token,fullName:userData.fullName,message:'User successfully created'})
        }
    }
    else{
        res.json({message:'Enter valid data'})
    }
    
}


// Signin
const loginUser = async(req,res)=>{

    const {email,password}=req.body
    const isUser = await user.findOne({email:email});

    if(!isUser){
        return res.status(401).json({ message: 'Email not registered'});
    }

    const isValidPassword = bcrypt.compareSync(password,isUser.password)

    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid password' });
    }
    
    // Access_Token creation
    const token = jwt.sign(
        {
            fullName:isUser.fullName,
            email:email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.TOKEN_EXPIRY

        }
    )
    res.json({token,fullName:isUser.fullName,message:'Logged in successfully'})
}

const bookingBody = zod.object({
    service: zod.enum(["Pet Nursing", "Pet Grooming", "Pet Walking"]),
    day: zod.string().regex(/^\d{1,2}$/, "Invalid day format"),
    month: zod.string().regex(/^\d{1,2}$/, "Invalid month format"),
    year: zod.string().regex(/^\d{4}$/, "Invalid year format"),
    hour: zod.string().regex(/^\d{1,2}$/, "Invalid hour format"),
    minute: zod.string().regex(/^\d{1,2}$/, "Invalid minute format"),
    ampm: zod.enum(["AM", "PM"]),
    place: zod.string(),
    email: zod.string().email()
});


// Add booking
const addBooking = async(req,res)=>{

    const bookingData = req.body;
    const bookingEmail = req.body.email;
    const { success, data, error } = bookingBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Enter valid inputs",
            error: error.errors
        });
    }


    const appointmentDate = `${data.day.padStart(2, "0")}/${data.month.padStart(2, "0")}/${data.year.slice(2)}`;
    const hour = data.hour.padStart(2, "0");
    const minute = data.minute.padStart(2, "0");
    const appointmentTime = `${hour}:${minute} ${data.ampm}`;
    const userData =await user.findOne({email:bookingEmail})

    if(userData){
        const newBooking = new bookings({
            service: bookingData.service,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
            place: bookingData.place,
            user: userData._id,
        })

        await newBooking.save()
        res.json({message:'Booking confirmed'})
    }

    else{
        res.json({message:'Email is not registered'})
    }
    
};


// Profile
const profileData = async(req,res)=>{

    const userData = await user.findOne({email:req.email});

    if(!userData){
        return res.json({message:'User not found'})
    }
    
    else{
        const bookingData = await bookings.find({user:userData._id})
        if(!bookingData.length){
            return res.json(
                {   
                    message:'Booking details not found',
                    fullName:userData.fullName,
                    email:userData.email,
                    phone:userData.phone,
                }
            )
        }
        return res.json(
            {   
                fullName:userData.fullName,
                email:userData.email,
                phone:userData.phone,
                booked:bookingData
            }
        )
    }
    
    
}


// Update password
const updatePassword = async(req,res)=>{
    
    const newPassword = req.body.newPassword;
    
    // from the token paylod i will get email
    const isUser = await user.findOne({email:req.email})
    if(!isUser){
        return res.json({message:'Invalid token'})
    }

    isUser.password = await bcrypt.hash(newPassword,10);
    res.json({message:'Password updated successfully'})
}


export {registerUser,loginUser,addBooking,profileData,updatePassword}