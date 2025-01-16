import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginDog from "../assets/loginDog.png";
import dogFoot from "../assets/dogFoot.png";
import dogFoot2 from "../assets/dogFoot2.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-[#F2E3BC] relative flex h-screen w-screen overflow-hidden">
      <div className="flex flex-col relative w-full lg:w-[50%] justify-center items-center">
        {/* Form Div */}
        <div className="relative w-full flex flex-col justify-center items-center">
          {/* Corner Images */}
          <div className="max-lg:hidden absolute -top-[75%] lg:-top-[30%] left-0">
            <img
              className="w-36 h-36 object-contain -rotate-90 opacity-60"
              src={dogFoot}
              alt="Top Left"
            />
          </div>
          <div className="absolute -top-[30%] md:-top-[30%] right-[5%]">
            <img
              className="w-28 h-28 lg:w-36 lg:h-36 object-contain rotate-45"
              src={dogFoot2}
              alt="Bottom Right"
            />
          </div>
          <div className="max-lg:hidden absolute -bottom-[75%] lg:-bottom-[30%] right-0">
            <img
              className="w-36 h-36 object-contain"
              src={dogFoot}
              alt="Top Right"
            />
          </div>
          <div className="absolute -bottom-[30%] md:-bottom-[30%] left-[5%]">
            <img
              className="h-28 w-28 lg:w-36 lg:h-36 object-contain -rotate-45"
              src={dogFoot2}
              alt="Bottom Left"
            />
          </div>

          <div className="flex flex-col w-[60%] justify-center items-center mb-6">
            {/* Signup Dog Image */}
            <div className="w-[80%] flex justify-center">
              <img className="object-contain" src={loginDog} alt="Signup Dog" />
            </div>
            {/* First Input Box */}
            <div className="w-full">
              <InputBox
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                placeholder="Full Name"
                type={"text"}
              />
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-6">
            <InputBox
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Phone"
              type={"text"}
            />
            <InputBox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              type={"text"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              type={"password"}
            />
          </div>

          {/* Submit Button */}
          <div className="bg-[#F2E3BC] w-[60%] p-4 mt-3">
            <Button
              onClick={async () => {
                const response = await axios.post("http://localhost:3000/user/signup",
                  {
                    fullName,
                    phone,
                    email,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("fullName", response.data.fullName);
                navigate("/home");
              }}
              label={"Sign up"}
            />
          </div>
          <div className="bg-[#F2E3BC]">
            Already have an Account? <Link to={"/signin"}>Sign In</Link>
          </div>
        </div>
      </div>

      {/* Quote Div */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-[#031D44] w-[50%] h-screen">
        <div className="text-[#F2E3BC] w-[85%] lg:text-4xl text-5xl font-bold flex flex-col justify-center items-center">
          <div>
            "Until one has loved an <br />
          </div>
          <div>
            animal, a part of one's soul <br />
          </div>
          <div>
            remains unawakened." <br />
          </div>
        </div>
        <div className="text-[#F2E3BC] text-3xl pt-4">- Anatole France</div>
      </div>
    </div>
  );
};

export default Signup;
