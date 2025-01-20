import petBoarding from "../assets/petBoarding.png";
import petNursing from "../assets/petNursing.png";
import petWalking from "../assets/petWalking.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Standards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure animations happen only once
    });
  }, []);

  return (
    <div
      id="services"
      className="h-full w-full flex flex-col gap-16 md:gap-20 lg:gap-24 justify-center items-center bg-white py-12 md:py-20 lg:py-40"
    >
      {/* Heading */}
      <div
        className="text-3xl md:text-5xl font-extrabold text-[#031D44]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Our Pet Care Standards
      </div>

      {/* Cards */}
      <div
        className="w-[80%] flex flex-col justify-center items-center gap-16 md:gap-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Pet Nursing */}
        <div className="flex max-md:flex-col justify-center items-center gap-2 border-0 shadow-2xl px-10 py-6 lg:px-20 lg:py-10 rounded-3xl">
          {/* Image Div */}
          <div className="w-full md:w-[40%] max-md:flex max-md:justify-center">
            <img
              className="h-40 w-40 lg:h-72 lg:w-72 object-cover rounded-full"
              src={petNursing}
              alt=""
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-[60%] flex flex-col gap-4">
            <div className="text-xl lg:text-3xl font-semibold text-[#031D44] max-md:text-center">
              Pet Nursing
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-[#031D44] max-md:text-center">
              Our Place offers nice Pet Boarding Our Place offers nice Pet
              Boarding Our Place offers nice Pet Boarding Our Place offers nice
              Pet Boarding Our Place offers nice Pet Boarding Our Place offers
              nice Pet Boarding
            </div>
          </div>
        </div>

        {/* Pet Grooming */}
        <div
          className="flex max-md:flex-col justify-center items-center gap-2 border-0 shadow-2xl px-10 py-6 lg:px-20 lg:py-10 rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image Div */}
          <div className="md:hidden w-full md:w-[40%] max-md:flex max-md:justify-center">
            <img
              className="h-40 w-40 lg:h-72 lg:w-72 object-cover rounded-full"
              src={petBoarding}
              alt=""
            />
          </div>
          {/* Description */}
          <div className="w-full md:w-[60%] flex flex-col gap-4">
            <div className="text-xl lg:text-3xl font-semibold text-[#031D44] max-md:text-center">
              Pet Grooming
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-[#031D44] max-md:text-center">
              Our Place offers nice Pet Boarding Our Place offers nice Pet
              Boarding Our Place offers nice Pet Boarding Our Place offers nice
              Pet Boarding Our Place offers nice Pet Boarding Our Place offers
              nice Pet Boarding
            </div>
          </div>
          {/* Image Div */}
          <div className="max-md:hidden w-full md:w-[40%] pl-16 overflow-hidden">
            <img
              className="h-40 w-40 lg:h-72 lg:w-72 object-cover rounded-full"
              src={petBoarding}
              alt=""
            />
          </div>

        </div>

        {/* Pet Walking */}
        <div
          className="flex max-md:flex-col justify-center items-center gap-2 border-0 shadow-2xl px-10 py-6 lg:px-20 lg:py-10 rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image Div */}
          <div className="w-full md:w-[40%] max-md:flex max-md:justify-center">
            <img
              className="h-40 w-40 lg:h-72 lg:w-72 object-cover rounded-full"
              src={petWalking}
              alt=""
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-[60%] flex flex-col gap-4">
            <div className="text-xl lg:text-3xl font-semibold text-[#031D44] max-md:text-center">
              Pet Walking
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-[#031D44] max-md:text-center">
              Our Place offers nice Pet Boarding Our Place offers nice Pet
              Boarding Our Place offers nice Pet Boarding Our Place offers nice
              Pet Boarding Our Place offers nice Pet Boarding Our Place offers
              nice Pet Boarding
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
