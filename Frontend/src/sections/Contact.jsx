import { footerLinks, socialMedia } from "../constants";
import copyrightSign from "../assets/copyrightSign.svg";
import Logo from "../assets/Logo.png";
import AOS from "aos";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className="max-container bg-[#031D44] pt-16 pb-4 px-8">
      <div className="w-full flex justify-center text-center text-[#F2E3BC] text-7xl font-extrabold pb-16">
        Contact Us
      </div>
      <div className="w-full flex justify-between items-start gap-20 lg:gap-80 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" data-aos="zoom-in">
            <img src={Logo} width={150} height={46} />
          </a>

          <p
            className="mt-2 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm text-[#F2E3BC] font-semibold"
            data-aos="zoom-in"
          >
            "Taking care of a pet is more than a responsibility; it’s a
            commitment to love, nurture, and cherish a life that trusts you
            unconditionally. In their eyes, you’re their whole world—be the
            kindness they deserve."
          </p>

          {/* Social Media icons */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-[#F2E3BC] rounded-full"
                data-aos="fade-up"
              >
                <img src={icon.src} alt="icon.alt" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-row justify-between px-20 lg:gap-10 gap-20 flex-wrap pt-10">
          {footerLinks.map((section) => (
            <div key={section} data-aos="fade-up">
              <h4 className="text-[#F2E3BC] font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-[#F2E3BC] font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    data-aos="fade-up"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-[#F2E3BC] mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy rigth sign"
            className="rounded-full m-0 w-4 h-4"
          />
          <p>Copyright. All rights Reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Contact;
