import {registerUser,loginUser,addBooking,profileData} from "../controllers/user.controllers.js";
import {Router} from "express"
import authenticate from "../middlewares/authentication.js";

const userRouter = Router();

userRouter.route("/signup").post(registerUser)
userRouter.route("/signin",authenticate).post(loginUser)
userRouter.route("/booking").post(addBooking)
userRouter.route("/profile").get(profileData)


export default userRouter