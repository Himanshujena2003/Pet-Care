import {registerUser,loginUser,addBooking,profileData} from "../controllers/user.controllers.js";
import {Router} from "express"
import authenticate from "../middlewares/authentication.js";

const userRouter = Router();

userRouter.route("/signup").post(registerUser)
userRouter.route("/signin").post(loginUser)
userRouter.route("/booking").post(addBooking)
userRouter.route("/profile",authenticate).post(profileData)


export default userRouter