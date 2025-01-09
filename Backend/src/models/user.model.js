import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        require:true
    },
    phone:{
        type:Number, 
        trim:true,
        require:true,
        unique:true,
        length:10,
    },
    email:{
        type:String,
        trim:true,
        require:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        require:true,
    }
})

let user;
function userModel(){
    user = mongoose.model("User",userSchema)
}

userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password); 
};

export {userModel,user}