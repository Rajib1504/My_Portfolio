import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="lg:my-28 md:my-16 my-12">
      <h3
        className="text-[#FF014F] font-light text-center text-lg lg:text-2xl"
        data-aos="fade-down"
      >
        About Me
      </h3>

      {/* Text Section with Animation */}
      <p
        className="text-gray-600 px-2 py-4 text-center bg-gray-200 md:text-lg lg:text-xl mt-12"
        data-aos="fade-up"
      >
        <span className="text-xl md:text-2xl lg:text-3xl font-semibold lg:ml-24">
          Hi
        </span>
        , I’m Rajib Sardar, a web developer specializing in Tailwind CSS, React,
        JavaScript, MongoDB, Express.js, Next.js, and Node.js. My journey into
        programming started with a simple curiosity about web development, which
        evolved into a deep passion for creating intuitive, user-friendly
        interfaces. I enjoy transforming ideas into clean, functional designs
        that provide seamless user experiences. Outside of coding, I love
        reading books, exploring new concepts, and traveling, especially to the
        mountains where I recharge and find inspiration. I’m always excited to
        learn, grow, and tackle new challenges—both professionally and
        personally. Let’s connect and create something amazing together!
      </p>
    </div>
  );
};

export default AboutMe;
