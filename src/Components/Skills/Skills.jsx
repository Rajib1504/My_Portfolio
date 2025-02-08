import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens only once
      easing: "ease-in-out", // Smooth animation
    });
  }, []);

  const skills = [
    { name: "HTML", percent: 80 },
    { name: "CSS", percent: 60 },
    { name: "Tailwind", percent: 70 },
    { name: "JS", percent: 60 },
    { name: "React", percent: 70 },
    { name: "Node.js", percent: 40 },
    { name: "Express.js", percent: 40 },
    { name: "MongoDB", percent: 35 },
    { name: "JWT", percent: 60 },
  ];

  return (
    <div id="Skills" className="mx-auto p-5 font-sans">
      <h3
        className="text-[#FF014F] font-light mb-4 text-center text-lg lg:text-2xl"
        data-aos="fade-down"
      >
        Skills
      </h3>
      <h2
        className="text-3xl text-gray-500 mb-8 text-left font-bold"
        data-aos="fade-up"
      >
        Development Skills
      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="mb-5" data-aos="fade-right">
          <div className="flex justify-between text-sm text-gray-700 mb-2">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white via-[#eb9bb3] to-[#FF014F] rounded-full"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}

      {/* Frontend Section */}
      <h3 className="text-[#FF014F] text-2xl" data-aos="fade-down">
        Frontend :
      </h3>
      <div className="flex items-center gap-3 my-10">
        {[
          { src: "https://imgur.com/If2tjcN.png", alt: "Html" },
          { src: "https://i.imgur.com/PQUrE4k.png", alt: "CSS" },
          { src: "https://i.imgur.com/5GwxUUf.png", alt: "JavaScript" },
          { src: "https://i.imgur.com/HdyOITq.png", alt: "Tailwind" },
          { src: "https://i.imgur.com/Vu7vq1H.png", alt: "React" },
          { src: "https://i.imgur.com/hJGiS1G.png", alt: "React Router" },
        ].map((tech, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-gradient-to-br from-gray-300 to-white shadow-md rounded-sm hover:scale-105 transition-all"
            data-aos="zoom-in"
          >
            <img className="w-8" src={tech.src} alt={tech.alt} />
          </div>
        ))}
      </div>

      {/* Backend Section */}
      <h3 className="text-[#FF014F] text-2xl" data-aos="fade-down">
        Backend :
      </h3>
      <div className="flex items-center gap-3 my-10">
        {[
          { src: "https://i.imgur.com/8p5vK57.png", alt: "Node.js" },
          { src: "https://i.imgur.com/jX0Q8an.png", alt: "Express" },
          { src: "https://i.imgur.com/HBjx7QA.png", alt: "MongoDB" },
          { src: "https://i.imgur.com/nRjf4rj.png", alt: "JWT" },
          { src: "https://i.imgur.com/Ly8G0eu.png", alt: "Firebase" },
        ].map((tech, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-gradient-to-br from-gray-300 to-white shadow-md rounded-sm hover:scale-105 transition-all"
            data-aos="zoom-in"
          >
            <img className="w-8" src={tech.src} alt={tech.alt} />
          </div>
        ))}
      </div>

      {/* Version Control */}
      <h3 className="text-[#FF014F] text-2xl" data-aos="fade-down">
        Version Control:
      </h3>
      <div className="flex items-center gap-3 my-10">
        {[
          { src: "https://i.imgur.com/Ce82CUA.png", alt: "Git" },
          { src: "https://i.imgur.com/qVRcYIC.png", alt: "GitHub" },
          { src: "https://i.imgur.com/kP74yn2.png", alt: "VSCode" },
        ].map((tech, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-gradient-to-br from-gray-300 to-white shadow-md rounded-sm hover:scale-105 transition-all"
            data-aos="zoom-in"
          >
            <img className="w-8" src={tech.src} alt={tech.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
