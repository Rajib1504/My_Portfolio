import { FaReact } from "react-icons/fa";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="grid grid-cols-1  gap-6 lg:gap-4  lg:grid-cols-2 items-center w-[90%] mx-auto py-10">
      {/* Text Container */}
      <div className="space-y-6 order-1">
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
          I am a passionate and detail-oriented Junior Frontend Developer and
          Web Developer, dedicated to crafting visually appealing and
          user-friendly websites. With a strong foundation in modern web
          technologies, I am creating responsive and dynamic interfaces that
          deliver seamless user experiences. While my primary focus lies in
          frontend development, I am also expanding my expertise to backend
          technologies, making me a budding Junior Full Stack Developer...
        </p>
        {/* button  */}
        <button className="border border-[#FF014F] flex gap-3 rounded-lg py-2 px-3">
          <span className="font-bold">Resume</span>
          <GoDownload className="text-2xl"></GoDownload>
        </button>
        {/* connect section  */}
        <div className="lg:mt-32 md:mt-20 mt-16 flex justify-between items-center flex-wrap">
          {/* 1st container  */}
          <div>
            <p className="text-sm lg:text-base uppercase mb-4 text-gray-500 tracking-widest">
              Let&apos;s Connect on
            </p>
            <div className="flex gap-3 justify-center items-center flex-wrap">
              {/* facebook  */}
              <a
                href="https://www.facebook.com/profile.php?id=100076870941377"
                target="_blank"
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff] hover:bg-gradient-to-b hover:from-[#FF014F] hover:to-[#92002c] shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all"
              >
                <FiFacebook className="text-lg sm:text-xl md:text-2xl" />
              </a>
              {/* linkdin  */}
              <a
                href="https://www.linkedin.com/in/rajib-sardar-35307934a"
                target="_blank"
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff] hover:bg-gradient-to-b hover:from-[#FF014F] hover:to-[#92002c] shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all"
              >
                <LuLinkedin className="text-lg sm:text-xl md:text-2xl" />
              </a>
              {/* github  */}
              <a
                href="https://github.com/Rajib1504"
                target="_blank"
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff] hover:bg-gradient-to-b hover:from-[#FF014F] hover:to-[#92002c] shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all"
              >
                <FiGithub className="text-lg sm:text-xl md:text-2xl" />
              </a>
            </div>
          </div>

          {/* 2nd container  */}
          <div>
            <p className="text-sm lg:text-base uppercase mb-4 text-gray-500 tracking-widest">
              Best skill on
            </p>
            {/* boxes  */}

            <div className="flex gap-3 justify-center items-center flex-wrap">
              {/* tailwind  */}
              <button className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16  text-gray-600  rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff] shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
                <RiTailwindCssFill className="text-lg text-sky-600 sm:text-xl md:text-2xl" />
              </button>
              {/* javascript  */}
              <button className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16  text-gray-600  rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff] shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
                <IoLogoJavascript className="text-lg text-yellow-500 sm:text-xl md:text-2xl" />
              </button>
              {/* react  */}
              <button className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16  text-gray-600  rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff] shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
                <FaReact className="text-lg text-[#FF014F] sm:text-xl md:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Image Container */}
      <div className="flex justify-center w-full lg:order-1 items-center rounded-lg relative">
        <div className="relative ">
          <img
            src="https://i.ibb.co/rKChCcDw/my-image-1-1.png"
            alt="Rajib Sardar"
            className=" lg:w-full h-screen md:pl-12 p-2 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
