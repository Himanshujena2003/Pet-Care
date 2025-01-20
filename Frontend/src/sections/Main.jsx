import Logo from "../assets/Logo.png";
import frontDog from "../assets/frontDog.png";
import healthCare from "../assets/healthCare.svg";
import grooming from "../assets/grooming.svg";
import store from "../assets/store.svg";
import dogFoot from "../assets/dogFoot.png";
import dogFoot2 from "../assets/dogFoot2.png";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faXmark } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Main = () => {
  const [nav, setNav] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure animations happen only once
    });
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    const token = localStorage.getItem("token");
    if (storedName) {
      setUserName(storedName);
    }
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Extract initials from full name
  const getInitials = (name) => {
    const nameArray = name.split(" ");
    if (nameArray.length === 1) return nameArray[0].charAt(0); // For single name
    return nameArray[0].charAt(0) + nameArray[1].charAt(0); // First letter of first and last name
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="main"
      className="bg-[#FCF0CC] h-full w-full scroll-smooth flex flex-col gap-10 lg:gap-0 max-md:pb-10"
    >
      {nav ? (
        <div className="md:hidden">
          <img className="h-14 absolute top-4 left-4" src={Logo} />
          <FontAwesomeIcon
            icon={faXmark}
            size="lg" // Optional: Controls the size of the icon
            onClick={handleNav}
            className="absolute top-7 right-7 z-[99] cursor-pointer hover:scale-110"
          />
        </div>
      ) : (
        <div className="md:hidden">
          <img className="h-14 absolute top-4 left-4" src={Logo} />
          <AiOutlineMenu
            size={20}
            onClick={handleNav}
            className="absolute top-7 right-7 z-[99] cursor-pointer hover:scale-110"
          />
        </div>
      )}

      {nav ? (
        <div className="fixed w-full h-screen bg-[#F2E3BC]/80 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[65%] flex justify-center items-center rounded-full shadow-md text-[#F2E3BC] bg-[#031D44] shadow-[#031D44] m-2 p-4"
          >
            <span className="font-bold">Home</span>
          </a>

          <a
            onClick={handleNav}
            href="#services"
            className="w-[65%] flex justify-center items-center rounded-full shadow-md text-[#F2E3BC] bg-[#031D44] shadow-[#031D44] m-2 p-4"
          >
            <span className="font-bold">Services</span>
          </a>

          <a
            onClick={handleNav}
            href="#about"
            className="w-[65%] flex justify-center items-center rounded-full shadow-md text-[#F2E3BC] bg-[#031D44] shadow-[#031D44] m-2 p-4"
          >
            <span className="font-bold">About</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[65%] flex justify-center items-center rounded-full shadow-md text-[#F2E3BC] bg-[#031D44] shadow-[#031D44] m-2 p-4"
          >
            <span className="font-bold">Contact Us</span>
          </a>

          <a
            onClick={handleNav}
            className="w-[65%] flex justify-center items-center rounded-full shadow-md text-[#F2E3BC] bg-[#031D44] shadow-[#031D44] m-2 p-4"
          >
            {isLoggedIn ? (
              <span className="font-bold text-lg">
                <Link to={"/profile"}>Profile</Link>
              </span>
            ) : (
              <span className="font-bold text-lg">
                <Link to={"/signup"}>Login/Signup</Link>
              </span>
            )}
          </a>
        </div>
      ) : (
        ""
      )}

      {/* Navbar */}
      <div className="flex justify-between items-center px-12 pt-4 max-md:hidden">
        <div className="">
          <img className="h-16 lg:h-20" src={Logo} />
        </div>
        <div className="flex text-md gap-4 lg:gap-8 xl:gap-16 lg:text-xl font-semibold text-[#031D44]">
          <div
            onClick={() => (window.location.href = "#main")}
            className="cursor-pointer hover:scale-110 ease-in duration-200"
          >
            Home
          </div>
          <div
            onClick={() => (window.location.href = "#services")}
            className="cursor-pointer hover:scale-110 ease-in duration-200"
          >
            Services
          </div>
          <div
            onClick={() => (window.location.href = "#about")}
            className="cursor-pointer hover:scale-110 ease-in duration-200"
          >
            About
          </div>
          <div
            onClick={() => (window.location.href = "#contact")}
            className="cursor-pointer hover:scale-110 ease-in duration-200"
          >
            Contact Us
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          {isLoggedIn ? (
            <div
              className="flex items-center justify-center w-14 h-14 bg-[#031D44] text-[#F2E3BC] rounded-full cursor-pointer text-xl font-bold"
              onClick={() => navigate("/profile")}
            >
              {getInitials(userName)}
            </div>
          ) : (
            <>
              <div
                className="text-lg lg:text-xl font-semibold text-[#031D44] hover:cursor-pointer"
                onClick={() => navigate("/signin")}
              >
                Login
              </div>
              <div
                className="text-lg lg:text-xl font-semibold bg-[#031D44] px-7 py-2 rounded-full text-[#F2E3BC] hover:cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </div>
            </>
          )}
        </div>
      </div>

      {/* Home */}
      <div className="flex relative bg-[#FCF0CC] mt-10 md:mt-0 lg:mt-0">
        {/* Paw Images */}
        <div
          className="absolute right-[70%] bottom-[80%] md:right-[75%] md:bottom-[78%]"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <img
            className="h-16 w-16 md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain opacity-40 -rotate-45"
            src={dogFoot2}
            alt="Bottom Right"
          />
        </div>
        <div
          className="absolute right-[35%] bottom-[60%] md:right-[58%] md:bottom-[68%]"
          data-aos="zoom-in"
          data-aos-delay="1500"
        >
          <img
            className="h-16 w-16 md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain opacity-50 -rotate-45"
            src={dogFoot}
            alt="Top Left"
          />
        </div>
        <div
          className="absolute right-[50%] bottom-[25%] md:right-[63%] md:bottom-[33%]"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <img
            className="h-16 w-16 md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain opacity-40 -rotate-45"
            src={dogFoot2}
            alt="Bottom Left"
          />
        </div>
        <div className="absolute right-[15%] bottom-[5%] md:right-[45%] md:bottom-[18%]" data-aos="zoom-in"
          data-aos-delay="500">
          <img
            className="h-16 w-16 md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain opacity-50 -rotate-45"
            src={dogFoot}
            alt="Top Right"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center max-md:items-center px-12 gap-4 mt-20">
          <div className="text-4xl lg:text-6xl font-bold text-[#031D44] max-md:text-center">
            Your Pet's <br /> Second Home
          </div>
          <div className="text-sm lg:text-xl text-[#031D44] max-md:text-center">
            Pets teach us unconditional love, loyalty, and joy in life’s
            simplest moments. They leave pawprints on our hearts that stay with
            us forever.
          </div>

          {/* Book Now Button */}
          <div
            className="bg-[#031D44] p-3 lg:p-6 w-[50%] md:w-[60%] lg:w-[40%] lg:mt-6 flex justify-center max-md:items-center md:text-xl lg:text-3xl font-bold text-[#FCF0CC] rounded-full hover:cursor-pointer hover:scale-105  ease-in duration-200"
            onClick={() => navigate("/booking")}
          >
            <div>Book Now</div>
          </div>
        </div>

        {/* Home Dog */}
        <div className="max-md:hidden w-[50%] relative overflow-hidden">
          <img
            className="scale-x-[-1] w-full h-full object-contain"
            src={frontDog}
          />
        </div>

        {/* Floating Bar */}
        <div className="max-lg:hidden absolute -bottom-[13%] left-1/2 transform -translate-x-1/2 bg-white flex justify-between items-center px-2 lg:px-20 w-[80%] rounded-3xl shadow-2xl py-8">
          <div className="flex gap-4 w-[33%]">
            <img
              className="h-10 w-10 lg:h-16 lg:w-16 object-cover"
              src={healthCare}
            />
            <div>
              <div className="text-lg lg:text-2xl font-bold text-[#031D44]">
                Health Care
              </div>
              <div className="text-sm text-[#031D44]">
                Regular checkup for your pet.
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[33%]">
            <img
              className="h-10 w-10 lg:h-16 lg:w-16 object-cover"
              src={grooming}
            />
            <div>
              <div className="text-lg lg:text-2xl font-bold text-[#031D44]">
                Grooming
              </div>
              <div className="text-sm text-[#031D44]">
                Grooming is essential for every pet.
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[33%]">
            <img
              className="h-10 w-10 lg:h-16 lg:w-16 object-cover"
              src={store}
            />
            <div>
              <div className="text-lg lg:text-2xl font-bold text-[#031D44]">
                Pet Store
              </div>
              <div className="text-sm text-[#031D44]">
                Buy pet food, toys, and other essentials.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
