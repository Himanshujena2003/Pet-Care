import eServices from "../assets/emergencyServices.png";
import pricing from "../assets/pricing.png";
import trusted from "../assets/trusted.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure animations happen only once
    });
  }, []);

  return (
    <div
      id="about"
      className="bg-[#FCF0CC] flex flex-col gap-12 md:gap-20 lg:gap-40 py-12 md:py-20 lg:py-40"
    >
      {/* Why Choose Us? */}
      <div
        className="flex justify-center text-center text-[#031D44] text-4xl md:text-5xl lg:text-7xl font-extrabold"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Why Choose Us?
      </div>

      <div className="flex justify-between md:px-8">
        {/* Trusted Professionals */}
        <div
          className="flex flex-1 flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 w-[33%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="h-16 w-16 md:h-32 md:w-32 lg:h-56 lg:w-56 rounded-full object-cover"
            src={trusted}
            alt=""
          />
          <div className="text-center text-[#031D44] text-md md:text-2xl lg:text-4xl font-bold">
            Trusted <br /> Professionals
          </div>
        </div>

        {/* Transparent Pricing */}
        <div
          className="flex flex-1 flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 w-[33%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="h-16 w-16 md:h-32 md:w-32 lg:h-56 lg:w-56 rounded-full object-cover"
            src={pricing}
            alt=""
          />
          <div className="text-center text-[#031D44] text-md md:text-2xl lg:text-4xl font-bold">
            Transparent <br /> Pricing
          </div>
        </div>

        {/* 24/7 Services */}
        <div
          className="flex flex-1 flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 w-[33%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="h-16 w-16 md:h-32 md:w-32 lg:h-56 lg:w-56 rounded-full object-cover"
            src={eServices}
            alt=""
          />
          <div className="text-center text-[#031D44] text-md md:text-2xl lg:text-4xl font-bold">
            24/7 <br /> Services
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
