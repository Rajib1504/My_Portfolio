import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact } from "react-icons/fa";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-4 lg:grid-cols-2 items-center mx-auto py-10 overflow-hidden">
      {/* Text Container */}
      <div className="space-y-6 order-1" data-aos="fade-right">
        <p className="text-sm lg:text-base uppercase text-gray-500 tracking-widest">
          Welcome to my world
        </p>
        {/* Title */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I’m{" "}
          </h1>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF014F]">
            Rajib Sardar
          </span>
        </div>
        {/* Subtitle */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl lg:text-4xl lg:font-bold md:font-semibold text-[#FF014F]">
            a
          </span>
          <h2 className="text-xl md:text-2xl lg:text-4xl lg:font-bold md:font-semibold">
            Junior Front-end Developer
          </h2>
        </div>
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          I am a passionate and detail-oriented Junior Frontend Developer...
        </p>
        {/* Resume Button */}
        <a
          href="https://i.ibb.co/cKMqsHPK/my-image-1-1-11zon.png"
          target="_blank"
          className="border border-[#FF014F] w-fit flex gap-3 rounded-lg py-2 px-3 hover:bg-[#FF014F] hover:text-white transition-all duration-300 ease-in-out"
        >
          <span className="font-bold">Resume</span>
          <GoDownload className="text-2xl" />
        </a>

        {/* Connect Section */}
        <div className="lg:mt-32 md:mt-20 mt-16 flex justify-between items-center flex-wrap">
          {/* Social Links */}
          <div>
            <p className="text-sm lg:text-base uppercase mb-4 text-gray-500 tracking-widest">
              Let&apos;s Connect on
            </p>
            <div className="flex gap-3 justify-center items-center flex-wrap">
              {[
                {
                  icon: FiFacebook,
                  link: "https://www.facebook.com/profile.php?id=100076870941377",
                },
                {
                  icon: LuLinkedin,
                  link: "https://www.linkedin.com/in/rajib-sardar-35307934a",
                },
                { icon: FiGithub, link: "https://github.com/Rajib1504" },
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  className="w-12 h-12 md:w-16 md:h-16 text-gray-600 hover:text-white rounded-md bg-gray-200 hover:bg-[#FF014F] flex justify-center items-center shadow-md transform hover:scale-110 transition-all duration-300"
                  data-aos="zoom-in"
                >
                  <Icon className="text-xl md:text-2xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <p className="text-sm lg:text-base uppercase mb-4 text-gray-500 tracking-widest">
              Best skill on
            </p>
            <div className="flex gap-3 justify-center items-center flex-wrap">
              {[RiTailwindCssFill, IoLogoJavascript, FaReact].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 md:w-16 md:h-16 text-gray-600 rounded-md bg-gray-200 flex justify-center items-center shadow-md transition-all hover:scale-110"
                    data-aos="flip-left"
                  >
                    <Icon className="text-xl md:text-2xl text-[#FF014F]" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Container with Floating Animation */}
      <div className="flex justify-center w-full lg:order-1 items-center rounded-lg relative overflow-hidden">
        <div className="relative">
          <img
            src="https://i.ibb.co/rKChCcDw/my-image-1-1.png"
            alt="Rajib Sardar"
            className="lg:w-full h-auto md:pl-12 p-2 object-cover rounded-lg shadow-lg floating"
          />
        </div>
      </div>

      {/* Floating Image Animation */}
      <style>{`
        .floating {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
